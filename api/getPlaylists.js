const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');


module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        accessToken,
        part,
        channelId,
        mine,
        hl,
        maxResults,
        onBehalfOfContentOwner,
        onBehalfOfContentOwnerChannel,
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
        parsedString = JSON.parse(str);
      } catch (e) {
        return false;
      }
      return parsedString;
    }

    part = util.isArray(part) ? part.join() : part;
    part = IsJsonString(part) ? IsJsonString(part).join() : part;

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        accessToken,
        part,
        channelId,
        mine,
        hl,
        maxResults,
        onBehalfOfContentOwner,
        onBehalfOfContentOwnerChannel,
        pageToken,
    });

    Youtube.playlists.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}
