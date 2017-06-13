const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        accessToken,
        part,
        videoId,
        id,
        onBehalfOfContentOwner,
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

    if(!accessToken || !videoId || !part) {
        callback(lib.reqError({accessToken, part, videoId}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        part,
        videoId,
        id,
        onBehalfOfContentOwner
    });

    Youtube.captions.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}
