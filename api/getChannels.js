const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		part, 
		categoryId,
		forUsername,
		managedByMe,
		mine,
		hl,
		maxResults,
		onBehalfOfContentOwner,
		pageToken,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!accessToken || !part) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = {
		part, 
		categoryId,
		forUsername,
		managedByMe,
		mine,
		hl,
		maxResults,
		onBehalfOfContentOwner,
		pageToken
	}

	lib.clearArgs(options);
	
	Youtube.channels.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}