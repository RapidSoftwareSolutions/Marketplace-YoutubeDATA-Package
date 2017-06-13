const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        accessToken,
        resource,
        part,
        onBehalfOfContentOwner,
        sync,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

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

    if(!accessToken || !resource || !part) {
        callback(lib.reqError({accessToken, resource, part}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    try {
        if(typeof resource == 'string') resource = JSON.parse(resource);
    } catch (e) {
        callback(lib.parseError('resource'), res, {to})
    }

    sync = sync ? sync == 'true' : undefined;

    let options = lib.clearArgs({
        part, resource, onBehalfOfContentOwner, sync
    });

    Youtube.activities.insert(options, (err, result) => {
        callback(err, res, {to, result});
    });
}
