const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

    let { 
        accessToken,
        resource,
        part,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!accessToken || !resource || !part) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

    try {
        resource = JSON.parse(resource);
    } catch (e) {
        callback('Bad resource.', res, {to});
        return;
    }

    let options = {
        part, 
        resource
    }

    Youtube.commentThreads.update(options, (err, result) => {
        callback(err, res, {to, result});
    });
}