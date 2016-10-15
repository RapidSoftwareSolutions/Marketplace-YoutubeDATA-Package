const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const fs      = require('fs');
const path    = require('path');
const spawn   = require('child_process').spawnSync

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        image,
        onBehalfOfContentOwner,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !image) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = {
        onBehalfOfContentOwner
    }

    let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), image]);
    
    if(!attach.stderr.toString()) {
        let response = JSON.parse(attach.stdout.toString());
        var filename = path.resolve('./lib', response.message);

        if(!response.success) {
            callback('Bad file!', res, {to});
            return;
        }

        options.media = {
            mimeType: 'application/octet-stream',
            body: fs.createReadStream(filename),
        }

    } else {
        console.log('Error with download.js!', attach.stderr.toString());
    }

    options = lib.clearArgs(options);

    Youtube.channelBanners.insert(options, (err, result) => {
        callback(err, res, {to, result});
        fs.unlink(filename);
    });
}