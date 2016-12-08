const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        channelId,
        onBehalfOfContentOwner,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !channelId) {
        callback(lib.reqError({accessToken, channelId}), res, {to})
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = {
        channelId,
    };

    Youtube.watermarks.unset(options, (err, result) => {
        callback(err, res, {to, result: "Success"});
    });
}