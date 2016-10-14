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
		callback('Fill in required fields.', res, {to});
    	return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = {
		part,
		channelId,
		id,
		mine,
		hl,
		onBehalfOfContentOwner,
	}

	lib.clearArgs(options);

	Youtube.channelSections.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}