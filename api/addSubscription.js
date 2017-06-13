const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');


module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        accessToken,
        part,
        resource,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !part) {
        callback(lib.reqError({accessToken, part}), res, {to});
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
    }

    let options = lib.clearArgs({
        part,
        resource
    });

    Youtube.subscriptions.insert(options, (err, result) => {
        callback(err, res, {to, result});
    });
}
