const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        id,
        onBehalfOfContentOwner,
        tfmt,
        tlang,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !id) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = {
        id,
        onBehalfOfContentOwner,
        tfmt,
        tlang
    }

    lib.clearArgs(options);

    Youtube.captions.download(options, (err, result) => {
        callback(err, res, {to, result});
    });
}