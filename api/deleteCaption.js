const lib     = require('../lib/functions');
const Youtube = require("youtube-api");

module.exports = (req, res, callback) => {

	let { 
		accessToken,
		id,
		onBehalfOfContentOwner,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!accessToken || !id) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = {
		id,
		onBehalfOfContentOwner,
	}

	lib.clearArgs(options);

	Youtube.captions.delete(options, (err, result) => {
        callback(err, res, {to, result: "Success"});
    });
}