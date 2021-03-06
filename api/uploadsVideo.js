const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const fs      = require('fs');
const path    = require('path');
const spawn   = require('child_process').spawnSync

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        part,
        file,
        autoLevels,
        notifySubscribers,
        onBehalfOfContentOwner,
        onBehalfOfContentOwnerChannel,
        stabilize,
        resource,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !file) {
        callback(lib.reqError({accessToken, resource, part}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    if(resource)
    try {
        if(typeof resource == 'string') resource = JSON.parse(resource);
    } catch (e) {
        callback(lib.parseError('resource'), res, {to});
        return;
    }

    let options = lib.clearArgs({
        part,
        autoLevels,
        notifySubscribers,
        onBehalfOfContentOwner,
        onBehalfOfContentOwnerChannel,
        stabilize,
        resource,
    });

    let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), file]);
    
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

    Youtube.videos.insert(options, (err, result) => {
        callback(err, res, {to, result});
        fs.unlink(filename);
    });
}