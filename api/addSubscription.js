const lib     = require('../lib/functions');
const Youtube = require("youtube-api")

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		accessToken,
		part,
		resource,
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

	try {
		resource = JSON.parse(resource);
	} catch (e) {
		callback('Bad resource.', res, {to})
	}

	let options = lib.clearArgs({
		part,
		resource
	});

	Youtube.subscriptions.insert(options, (err, result) => {
        callback(err, res, {to, result});
    });
}