const lib     = require('../lib/functions');
const Youtube = require("youtube-api")

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        accessToken,
        part,
        channelId,
        id,
        mine,
        myRecentSubscribers,
        mySubscribers,
        forChannelId,
        maxResults,
        onBehalfOfContentOwner,
        onBehalfOfContentOwnerChannel,
        order,
        pageToken,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !part) {
        callback('Fill in required fields: accessToken, part.', res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        part,
        channelId,
        id,
        mine,
        myRecentSubscribers,
        mySubscribers,
        forChannelId,
        maxResults,
        onBehalfOfContentOwner,
        onBehalfOfContentOwnerChannel,
        order,
        pageToken,
    });

    Youtube.subscriptions.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}