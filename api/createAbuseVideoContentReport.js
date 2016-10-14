const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		videoId,
		reasonId,
		secondaryReasonId,
		comments,
		language,
		onBehalfOfContentOwner,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!accessToken || !videoId || !reasonId) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = lib.clearArgs({
		videoId,
		reasonId,
		secondaryReasonId,
		comments,
		language,
		onBehalfOfContentOwner,
	});

	console.log(options);
	Youtube.videos.reportAbuse({resource: options}, (err, result) => {
        callback(err, res, {to, result:"Success"});
    });
}