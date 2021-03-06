const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        id,
        rating="like",
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !id) {
        callback(lib.reqError({accessToken, id}), res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    let options = {
        id,
        rating
    };

    Youtube.videos.rate(options, (err, result) => {
        callback(err, res, {to, result: "Success"});
    });
}