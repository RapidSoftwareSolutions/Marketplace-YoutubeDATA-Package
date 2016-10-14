const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		part,
		resource,
		onBehalfOfContentOwner,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!accessToken || !resource || !part) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	try {
		resource = JSON.parse(resource);
	} catch (e) {
		callback('Bad resource.', res, {to});
		return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = lib.clearArgs({
		part,
		resource,
		onBehalfOfContentOwner
	});

	Youtube.videos.update(options, (err, result) => {
        callback(err, res, {to, result});
    });
}