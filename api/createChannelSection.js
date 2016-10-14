const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		part,
		resource,
		onBehalfOfContentOwnerChannel,
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

	let options = {
		part,
		resource,
		onBehalfOfContentOwnerChannel,
		onBehalfOfContentOwner
	}

	lib.clearArgs(options);

	Youtube.channelSections.insert(options, (err, result) => {
		console.log(err, result)
        callback(err, res, {to, result});
    });
}