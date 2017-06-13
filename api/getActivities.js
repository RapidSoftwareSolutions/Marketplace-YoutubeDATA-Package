const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
var datetime = require('node-datetime');
const util = require('util');

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let {
        accessToken,
        part,
        home,
        channelId,
        mine,
        maxResults,
        pageToken,
        publishedAfter,
        publishedBefore,
        regionCode,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    let rawTime = datetime.create(publishedAfter);
    publishedAfter = rawTime.format('Y-m-d\TH:M:S\Z');
    let rawTime2 = datetime.create(publishedBefore);
    publishedBefore = rawTime2.format('Y-m-d\TH:M:S\Z');
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

    if(!accessToken || !(channelId || mine) || !part) {
        callback(lib.reqError({accessToken, channelId, part}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    mine = mine == 'true';

    let options = lib.clearArgs({
        accessToken,
        part,
        home,
        channelId,
        mine,
        maxResults,
        pageToken,
        publishedAfter,
        publishedBefore,
        regionCode
    });

    Youtube.activities.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}
