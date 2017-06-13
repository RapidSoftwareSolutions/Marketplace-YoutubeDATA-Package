const lib     = require('../lib/functions');
const Youtube = require("youtube-api");
const util = require('util');
var datetime = require('node-datetime');



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
        callback(lib.reqError({accessToken}), res, {to});
        return;
    }
    function IsJsonString(str) {
      try {
        parsedString = JSON.parse(str);
      } catch (e) {
        return false;
      }
      return parsedString;
    }

    part = util.isArray(part) ? part.join() : part;
    part = IsJsonString(part) ? IsJsonString(part).join() : part;

    let rawTime = datetime.create(publishedAfter);
    publishedAfter = rawTime.format('Y-m-d\TH:M:S\Z');
    let rawTime2 = datetime.create(publishedBefore);
    publishedBefore = rawTime2.format('Y-m-d\TH:M:S\Z');

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
