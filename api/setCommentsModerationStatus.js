const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		id,
		moderationStatus,
		banAuthor,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {},
    };

	if(!accessToken || !id || !moderationStatus) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = {
		id,
		moderationStatus,
		banAuthor,
	}

	lib.clearArgs(options);

	Youtube.comments.setModerationStatus(options, (err, result) => {
        callback(err, res, {to, result: "Success"});
    });
}