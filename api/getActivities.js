const lib     = require('../lib/functions');
const Youtube = require("youtube-api")

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        accessToken,
        part,
        channelId,
        mine,
        maxResults,
        pageToken,
        publishedAfter,
        regionCode,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !(channelId || mine) || !part) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    mine = mine == 'true';

    let options = lib.clearArgs({
        accessToken,
        part,
        home: true,
        //channelId,
        //mine,
        maxResults,
        pageToken,
        publishedAfter,
        regionCode
    });

    Youtube.activities.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}