const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');


module.exports = (req, res, callback) => {

    let {
        accessToken,
        part,
        categoryId,
        forUsername,
        managedByMe,
        mine,
        hl,
        maxResults,
        onBehalfOfContentOwner,
        pageToken,
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

    let options = lib.clearArgs({
        part,
        categoryId,
        forUsername,
        managedByMe,
        mine,
        hl,
        maxResults,
        onBehalfOfContentOwner,
        pageToken
    });

    Youtube.channels.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}
