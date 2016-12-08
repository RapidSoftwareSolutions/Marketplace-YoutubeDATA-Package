const lib     = require('../lib/functions');
const Youtube = require("youtube-api")

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        accessToken,
        part,
        id,
        regionCode,
        hl,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken) {
        callback(lib.reqError({accessToken, part}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = lib.clearArgs({
        part,
        id,
        regionCode,
        hl,
    });

    Youtube.videoCategories.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}