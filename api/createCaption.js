const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const fs      = require('fs');
const path    = require('path');
const spawn   = require('child_process').spawnSync;
const util = require('util');

module.exports = (req, res, callback) => {

    let {
        accessToken,
        resource,
        part,
        file,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };


    if(!accessToken || !resource || !part) {
        callback(lib.reqError({accessToken, resource, part}), res, {to});
        return;
    }
    function IsJsonString(str) {
        try {
          parsedString =   JSON.parse(str);
        } catch (e) {
            return false;
        }
        return parsedString;
    }

    part = util.isArray(part) ? part.join() : part;
    part = IsJsonString(part)? IsJsonString(part).join() : part ;


    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    try {
        if(typeof resource == 'string') resource = JSON.parse(resource);
    } catch (e) {
        callback(lib.parseError('resource'), res, {to});
        return;
    }

    let options = lib.clearArgs({
        part,
        resource
    });

    if(file) {
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
    }


    Youtube.captions.insert(options, (err, result) => {
        callback(err, res, {to, result});
        if(file) fs.unlink(filename);
    });
}
