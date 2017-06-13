const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');


module.exports = (req, res, callback) => {

    let {
        accessToken,
        part,
        resource,
        onBehalfOfContentOwnerChannel,
        onBehalfOfContentOwner,
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

    try {
        if(typeof resource == 'string') resource = JSON.parse(resource);
    } catch (e) {
        callback(lib.parseError('resource'), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        part,
        resource,
        onBehalfOfContentOwnerChannel,
        onBehalfOfContentOwner
    });

    Youtube.channelSections.insert(options, (err, result) => {
        console.log(err, result)
        callback(err, res, {to, result});
    });
}
