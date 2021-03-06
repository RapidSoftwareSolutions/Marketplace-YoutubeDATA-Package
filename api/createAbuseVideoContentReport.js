const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        videoId,
        reasonId,
        secondaryReasonId,
        comments,
        language,
        onBehalfOfContentOwner,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !videoId || !reasonId) {
        callback(lib.reqError({accessToken, videoId, reasonId}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        videoId,
        reasonId,
        secondaryReasonId,
        comments,
        language,
        onBehalfOfContentOwner,
    });

    Youtube.videos.reportAbuse({resource: options}, (err, result) => {
        callback(err, res, {to, result:"Success"});
    });
}