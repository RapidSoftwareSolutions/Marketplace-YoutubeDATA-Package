const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const fs      = require('fs');
const path    = require('path');
const spawn   = require('child_process').spawnSync

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        image,
        channelId,
        onBehalfOfContentOwner,
        resource,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !image || !channelId) {
        callback(lib.reqError({accessToken, image, channelId}), res, {to})
        return;
    }

    try {
        resource = JSON.parse(resource);
    } catch (e) {
        callback(lib.parseError('resource'), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        resource,
        channelId,
        onBehalfOfContentOwner
    });

    if(image) {
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
    }

    Youtube.watermarks.set(options, (err, result) => {
        callback(err, res, {to, result: "Success"});
        if(image) fs.unlink(filename);
    });
}