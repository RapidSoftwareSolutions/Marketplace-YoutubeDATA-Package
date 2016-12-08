const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        part,
        channelId,
        id,
        mine,
        hl,
        onBehalfOfContentOwner,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !part) {
        callback(lib.reqError({accessToken, part}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        part,
        channelId,
        id,
        mine,
        hl,
        onBehalfOfContentOwner,
    });

    Youtube.channelSections.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}