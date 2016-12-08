const lib     = require('../lib/functions');
const Youtube = require("youtube-api")

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        accessToken,
        part,
        id,
        parentId,
        maxResults,
        pageToken,
        textFormat,
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
        id,
        part,
        parentId,
        maxResults,
        pageToken,
        textFormat
    });

    Youtube.comments.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}