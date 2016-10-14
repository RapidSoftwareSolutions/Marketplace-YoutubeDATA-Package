const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		part, 
		chart,
		id,
		myRating,
		hl,
		maxResults,
		onBehalfOfContentOwner,
		pageToken,
		regionCode,
		videoCategoryId,
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

	let options = lib.clearArgs({
		part, 
		chart,
		id,
		myRating,
		hl,
		maxResults,
		onBehalfOfContentOwner,
		pageToken,
		regionCode,
		videoCategoryId
	});
	
	Youtube.videos.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}