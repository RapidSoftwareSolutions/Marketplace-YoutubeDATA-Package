const lib     = require('../lib/functions');
const Youtube = require("youtube-api")

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		accessToken,
		part="snippet",
		forContentOwner,
		forDeveloper,
		forMine,
		relatedToVideoId,
		channelId,
		channelType,
		eventType,
		location,
		locationRadius,
		maxResults,
		onBehalfOfContentOwner,
		order,
		pageToken,
		publishedAfter,
		publishedBefore,
		q,
		regionCode,
		relevanceLanguage,
		safeSearch,
		topicId,
		type,
		videoCaption,
		videoCategoryId,
		videoDefinition,
		videoDimension,
		videoDuration,
		videoEmbeddable,
		videoLicense,
		videoSyndicated,
		videoType,			
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!accessToken) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	Youtube.authenticate({type: "oauth"}).setCredentials({access_token: accessToken});

	let options = lib.clearArgs({
		part,
		forContentOwner,
		forDeveloper,
		forMine,
		relatedToVideoId,
		channelId,
		channelType,
		eventType,
		location,
		locationRadius,
		maxResults,
		onBehalfOfContentOwner,
		order,
		pageToken,
		publishedAfter,
		publishedBefore,
		q,
		regionCode,
		relevanceLanguage,
		safeSearch,
		topicId,
		type,
		videoCaption,
		videoCategoryId,
		videoDefinition,
		videoDimension,
		videoDuration,
		videoEmbeddable,
		videoLicense,
		videoSyndicated,
		videoType,
	});

	Youtube.search.list(options, (err, result) => {
        callback(err, res, {to, result});
    });
}