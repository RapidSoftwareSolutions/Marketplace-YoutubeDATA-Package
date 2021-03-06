[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/YoutubeDataApi/functions?utm_source=RapidAPIGitHub_YoutubeDataApiFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# YoutubeDataApi Package
Add YouTube features to your application, including the ability to upload videos, create and manage playlists, and more.
* Domain: [YoutubeDataApi](http://youtube.com)
* Credentials: accessToken

## How to get credentials:
The YouTube Data API supports the OAuth 2.0 protocol for authorizing access to private user data. The list below explains some core OAuth 2.0 concepts:

+ When a user first attempts to use functionality in your application that requires the user to be logged in to a Google Account or YouTube account, your application initiates the OAuth 2.0 authorization process.
+ Your application directs the user to Google's authorization server. The link to that page specifies the `scope` of access that your application is requesting for the user's account. The `scope` specifies the resources that your application can retrieve, insert, update, or delete when acting as the authenticated user.
+ If the user consents to authorize your application to access those resources, Google returns a token to your application. Depending on your application's type, it either validates the token or exchanges it for a different type of token.

 > For example, a server-side web application exchanges the returned token for an `access_token` and a refresh token. The `access_token` lets the application authorize requests on the user's behalf, and the refresh token lets the application retrieve a new access token when the original access token expires.

___
## Activity resource

```
{
  "kind": "youtube#activity",
  "etag": etag,
  "id": string,
  "snippet": {
    "publishedAt": datetime,
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      (key): {
        "url": string,
        "width": unsigned integer,
        "height": unsigned integer
      }
    },
    "channelTitle": string,
    "type": string,
    "groupId": string
  },
  "contentDetails": {
    "upload": {
      "videoId": string
    },
    "like": {
      "resourceId": {
        "kind": string,
        "videoId": string,
      }
    },
    "favorite": {
      "resourceId": {
        "kind": string,
        "videoId": string,
      }
    },
    "comment": {
      "resourceId": {
        "kind": string,
        "videoId": string,
        "channelId": string,
      }
    },
    "subscription": {
      "resourceId": {
        "kind": string,
        "channelId": string,
      }
    },
    "playlistItem": {
      "resourceId": {
        "kind": string,
        "videoId": string,
      },
      "playlistId": string,
      "playlistItemId": string
    },
    "recommendation": {
      "resourceId": {
        "kind": string,
        "videoId": string,
        "channelId": string,
      },
      "reason": string,
      "seedResourceId": {
        "kind": string,
        "videoId": string,
        "channelId": string,
        "playlistId": string
      }
    },
    "bulletin": {
      "resourceId": {
        "kind": string,
        "videoId": string,
        "channelId": string,
        "playlistId": string
      }
    },
    "social": {
      "type": string,
      "resourceId": {
        "kind": string,
        "videoId": string,
        "channelId": string,
        "playlistId": string
      },
      "author": string,
      "referenceUrl": string,
      "imageUrl": string
    },
    "channelItem": {
      "resourceId": {
      }
    },
  }
}
```



## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```


## YoutubeDataApi.getActivities
Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel or with the user's own channel.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: Access token obtained from Google.com
| part           | List       | Required: The part parameter specifies an array of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, snippet
| channelId      | String     | Required if `mime` is not provide: The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
| home           | String     | For requests that set this parameter, the API response contains items similar to those that a logged-out user would see on the YouTube home page. Note that this parameter can only be used in a properly authorized request. (deprecated)
| mine           | String     | Required if `channelId` is not provide: This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
| maxResults     | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
| pageToken      | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
| publishedAfter | DatePicker | The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
| publishedBefore| DatePicker | The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
| regionCode     | String     | The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.

## YoutubeDataApi.createActivity
Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | List       | Required: The part parameter specifies an array of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, snippet
| resource   | JSON       | Required: An activity resource.

## YoutubeDataApi.getCaptions
Retrieve a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track. Try it now.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet
| videoId               | String     | Required: The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
| id                    | String     | The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.createCaption
Uploads a caption track.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| sync                  | String     | The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions. You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.
| resource              | JSON       | Required: An caption resource.
| file                  | String     | A file url.

## YoutubeDataApi.updateCaption
Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| sync                  | String     | The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions. You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.
| resource              | JSON       | Required: An caption resource.
| file                  | String     | A file url.

## YoutubeDataApi.downloadCaption
Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| id                    | String     | Required: The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| tfmt                  | String     | The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format. Supported values are: `sbv` – SubViewer subtitle; `scc` – Scenarist Closed Caption format; `srt` – SubRip subtitle; `ttml` – Timed Text Markup Language caption; `vtt` – Web Video Text Tracks caption
| tlang                 | String     | The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.

## YoutubeDataApi.deleteCaption
Deletes a specified caption track.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| id                    | String     | Required: The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.createChannelBanners
Upload a channel banner image to YouTube.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| image                 | String     | Required: Image url.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.getChannels
Returns a collection of zero or more channel resources that match the request criteria.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more channel resource properties that the API response will include. (`auditDetails`,`brandingSettings`,`contentDetails`,`contentOwnerDetails`,`id`,`invideoPromotion`,`localizations`,`snippet`,`statistics`,`status`,`topicDetails`)
| categoryId            | String     | The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
| forUsername           | String     | The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
| managedByMe           | String     | Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
| mine                  | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
| hl                    | String     | If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
| maxResults            | String     | The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| pageToken             | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.

## YoutubeDataApi.updateChannel
Updates a channel's metadata.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | String     | Required: Required: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings, invideoPromotion, or localizations. (You can only update any one of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in the part that the parameter value specifies.
| onBehalfOfContentOwner| String     | This parameter can only be used in a properly authorized request. The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
| resource              | JSON       | Required: A channel resource.

## YoutubeDataApi.getChannelSections
Returns a list of channelSection resources that match the API request criteria.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more channelSection resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the section. If you set part=snippet, the API response will also contain all of those nested properties.The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, localizations, snippet, targeting
| channelId             | String     | The channelId parameter specifies a YouTube channel ID. If a request specifies a value for this parameter, the API will only return the specified channel's sections.
| id                    | String     | The id parameter specifies a comma-separated list of IDs that uniquely identify the channelSection resources that are being retrieved. In a channelSection resource, the id property specifies the section's ID.
| mine                  | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the channel sections associated with the authenticated user's YouTube channel.
| hl                    | String     | The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method. If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.createChannelSection
Adds a channel section to the authenticated user's channel.

| Field                        | Type       | Description
|------------------------------|------------|----------
| accessToken                  | credentials| Required: Access token obtained from Google.com
| part                         | List       | Required: The part parameter specifies an array of one or more channelSection resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the section. If you set part=snippet, the API response will also contain all of those nested properties.The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, localizations, snippet, targeting
| onBehalfOfContentOwner       | String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| onBehalfOfContentOwnerChannel| String     | The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
| resource                     | String     | Required: An channelSection resource.

## YoutubeDataApi.updateChannelSection
Updates a channel section.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more channelSection resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the section. If you set part=snippet, the API response will also contain all of those nested properties.The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, localizations, snippet, targeting
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| resource              | String     | Required: An channelSection resource.

## YoutubeDataApi.deleteChannelSection
Deletes a channel section.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| id                    | String     | Required: The id parameter specifies the ID that uniquely identifies the channel section that is being deleted. In a channelSection resource, the id property specifies the section's ID.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.getComments
Returns a list of comments that match the API request parameters.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | List       | Required: The part parameter specifies an array of one or more comment resource properties that the API response will include. The list below contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet
| id         | String     | The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
| parentId   | String     | The parentId parameter specifies the ID of the comment for which replies should be retrieved.
| maxResults | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
| pageToken  | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
| textFormat | Select     | This parameter indicates whether the API should return comments formatted as HTML or as plain text. The default value is html. Acceptable values are:`html` – Returns the comments in HTML format. This is the default value. `plainText` – Returns the comments in plain text format.

## YoutubeDataApi.replyToComment
Creates a reply to an existing comment.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `id`, `snippet`
| resource   | JSON       | Required: An Comment resource

## YoutubeDataApi.updateComment
Modifies a comment.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `id`, `snippet`
| resource   | JSON       | Required: An Comment resource

## YoutubeDataApi.markCommentsAsSpam
Expresses the caller's opinion that one or more comments should be flagged as spam.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| id         | String     | Required: The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.

## YoutubeDataApi.setCommentsModerationStatus
Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| Required: Access token obtained from Google.com
| id              | String     | Required: The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
| moderationStatus| String     | Required: Identifies the new moderation status of the specified comments. Acceptable values are: `heldForReview` – Marks a comment as awaiting review by a moderator. `published` – Clears a comment for public display. `rejected` – Rejects a comment as being unfit for display. This action also effectively hides all replies to the rejected comment.
| banAuthor       | String     | The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.

## YoutubeDataApi.deleteComment
Deletes a comment.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| id         | String     | Required: The id parameter specifies the comment ID for the resource that is being deleted.

## YoutubeDataApi.getCommentThreads
Returns a list of comment threads that match the API request parameters.

| Field                       | Type       | Description
|-----------------------------|------------|----------
| accessToken                 | credentials| Required: Access token obtained from Google.com
| part                        | List       | Required: The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, replies, snippet
| allThreadsRelatedToChannelId| String     | The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
| channelId                   | String     | The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
| id                          | String     | The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
| videoId                     | String     | The videoId parameter instructs the API to return comment threads associated with the specified video ID.
| maxResults                  | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set.
| moderationStatus            | String     | This parameter can only be used in a properly authorized request. Set this parameter to limit the returned comment threads to a particular moderation state. Acceptable values are: `heldForReview` – Retrieve comment threads that are awaiting review by a moderator. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment are awaiting review. `likelySpam` – Retrieve comment threads classified as likely to be spam. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment is considered likely to be spam. `published` – Retrieve threads of published comments. This is the default value. A comment thread can be included in the response if its top-level comment has been published.
| order                       | String     | The order parameter specifies the order in which the API response should list comment threads. Valid values are: `time` - Comment threads are ordered by time. This is the default behavior. `relevance` - Comment threads are ordered by relevance.
| pageToken                   | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
| searchTerms                 | String     | The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.
| textFormat                  | Select     | Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text. The default value is html. Acceptable values are: `html` – Returns the comments in HTML format. This is the default value. `plainText` – Returns the comments in plain text format.

## YoutubeDataApi.createCommentThread
Creates a new top-level comment.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part:`id`,`replies`,`snippet`.
| resource   | String     | Required: An CommentThread resource.

## YoutubeDataApi.updateCommentThread
Modifies the top-level comment in a comment thread.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part:`id`,`replies`,`snippet`.
| resource   | String     | Required: An CommentThread resource.

## YoutubeDataApi.getGuideCategories
Returns a list of categories that can be associated with YouTube channels.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
| id         | String     | The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
| regionCode | String     | The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
| hl         | String     | The hl parameter specifies the language that will be used for text values in the API response. The default value is en-US.

## YoutubeDataApi.getApplicationLanguages
Returns a list of application languages that the YouTube website supports.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 1 unit.
| hl         | String     | The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US.

## YoutubeDataApi.getContentRegions
Returns a list of content regions that the YouTube website supports.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 1 unit.
| hl         | String     | The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US.

## YoutubeDataApi.getPlaylistItems
Returns a collection of playlist items that match the API request parameters.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `status`
| id                    | String     | The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
| playlistId            | String     | The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
| maxResults            | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| pageToken             | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
| videoId               | String     | The videoId parameter specifies that the request should return only the playlist items that contain the specified video.

## YoutubeDataApi.createPlaylistItem
Adds a resource to a playlist.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `status`
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| resource              | JSON       | Required: A playlistItem resource.

## YoutubeDataApi.updatePlaylistItem
Modifies a playlist item. For example, you could update the item's position in the playlist.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `status`
| resource   | JSON       | Required: A playlistItem resource.

## YoutubeDataApi.deletePlaylistItem
Deletes a playlist.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| id         | String     | Required: The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.

## YoutubeDataApi.getPlaylists
Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.

| Field                        | Type       | Description
|------------------------------|------------|----------
| accessToken                  | credentials| Required: Access token obtained from Google.com
| part                         | List       | Required: The part parameter specifies an array of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for  `contentDetails`,`id`, `localizations`, `player`, `snippet`, `status`,
| channelId                    | String     | This value indicates that the API should only return the specified channel's playlists.
| id                           | String     | The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
| mine                         | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
| maxResults                   | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
| onBehalfOfContentOwner       | String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| onBehalfOfContentOwnerChannel| String     | The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
| pageToken                    | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.

## YoutubeDataApi.createPlaylist
Creates a playlist.

| Field                        | Type       | Description
|------------------------------|------------|----------
| accessToken                  | credentials| Required: Access token obtained from Google.com
| part                         | List       | Required: The part parameter specifies an array of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for  `contentDetails`,`id`, `localizations`, `player`, `snippet`, `status`,
| onBehalfOfContentOwner       | String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| onBehalfOfContentOwnerChannel| String     | The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
| resource                     | JSON       | Required: A playlist resource.

## YoutubeDataApi.updatePlaylist
Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for  `contentDetails`,`id`, `localizations`, `player`, `snippet`, `status`,
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| resource              | JSON       | Required: A playlist resource.

## YoutubeDataApi.deletePlaylist
Deletes a playlist.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| id                    | String     | Required: The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.getSearchResults
Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | The part parameter specifies an array of one or more search resource properties that the API response will include. Set the parameter value to snippet.
| forContentOwner       | String     | The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
| forDeveloper          | String     | This parameter can only be used in a properly authorized request. The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. The forDeveloper parameter can be used in conjunction with optional search parameters like the q parameter.
| forMine               | String     | This parameter can only be used in a properly authorized request. The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
| relatedToVideoId      | String     | The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
| channelId             | String     | The channelId parameter indicates that the API response should only contain resources created by the channel.
| channelType           | String     | The channelType parameter lets you restrict a search to a particular type of channel.
| eventType             | String     | The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
| location              | Map        | The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).
| locationRadius        | String     | The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area. The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.
| maxResults            | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| order                 | String     | The order parameter specifies the method that will be used to order resources in the API response. The default value is relevance. Acceptable values are: `date` – Resources are sorted in reverse chronological order based on the date they were created. `rating` – Resources are sorted from highest to lowest rating. `relevance` – Resources are sorted based on their relevance to the search query. This is the default value for this parameter. `title` – Resources are sorted alphabetically by title. `videoCount` – Channels are sorted in descending order of their number of uploaded videos. `viewCount` – Resources are sorted from highest to lowest number of views. For live broadcasts, videos are sorted by number of concurrent viewers while the broadcasts are ongoing.
| pageToken             | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
| publishedAfter        | DatePicker | The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
| publishedBefore       | DatePicker | The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
| q                     | String     | Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either 'boating' or 'sailing', set the q parameter value to boating|sailing. Similarly, to search for videos matching either 'boating' or 'sailing' but not 'fishing', set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
| regionCode            | String     | The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
| relevanceLanguage     | String     | The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
| safeSearch            | String     | The safeSearch parameter indicates whether the search results should include restricted content as well as standard content. Acceptable values are:`moderate` – YouTube will filter some content from search results and, at the least, will filter content that is restricted in your locale. Based on their content, search results could be removed from search results or demoted in search results. This is the default parameter value.`none` – YouTube will not filter the search result set. `strict` – YouTube will try to exclude all restricted content from the search result set. Based on their content, search results could be removed from search results or demoted in search results.
| topicId               | String     | The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
| type                  | String     | The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `closedCaption`, `none`)
| videoCategoryId       | String     | The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
| videoDefinition       | String     | The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video. (`2d`, `3d`, `any`)
| videoDuration         | String     | The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `long`, `medium`, `short`)
| videoEmbeddable       | String     | The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
| videoLicense          | String     | The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `creativeCommon`, `youtube`)
| videoSyndicated       | String     | The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `true`)
| videoType             | String     | The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `episode`, `movie`)

## YoutubeDataApi.getSubscriptions
Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.

| Field                        | Type       | Description
|------------------------------|------------|----------
| accessToken                  | credentials| Required: Access token obtained from Google.com
| part                         | List       | Required: The part parameter specifies an array of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `subscriberSnippet`
| channelId                    | String     | The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
| id                           | String     | The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
| mine                         | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
| myRecentSubscribers          | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
| mySubscribers                | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
| forChannelId                 | String     | The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
| maxResults                   | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
| onBehalfOfContentOwner       | String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| onBehalfOfContentOwnerChannel| String     | The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
| order                        | String     | The order parameter specifies the method that will be used to sort resources in the API response. The default value is SUBSCRIPTION_ORDER_RELEVANCE. Acceptable values are: `alphabetical` – Sort alphabetically. `relevance` – Sort by relevance. `unread` – Sort by order of activity.
| pageToken                    | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.

## YoutubeDataApi.addSubscription
Adds a subscription for the authenticated user's channel.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | List       | Required: The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `subscriberSnippet`
| resource   | JSON       | Required: A subscription resource.

## YoutubeDataApi.deleteSubscription
Deletes a subscription.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| id         | String     | Required: The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.

## YoutubeDataApi.setThumbnail
Uploads a custom video thumbnail to YouTube and sets it for a video.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| videoId               | String     | Required: The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
| image                 | String     | Required: Image url.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.getVideoAbuseReportReasons
Retrieve a list of reasons that can be used to report abusive videos.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet. The snippet part has a quota cost of 2 units.
| hl         | String     | The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US.

## YoutubeDataApi.getVideoCategories
Returns a list of categories that can be associated with YouTube videos.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
| id         | String     | The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
| regionCode | String     | The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
| hl         | String     | The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US.

## YoutubeDataApi.setWatermark
Uploads a watermark image to YouTube and sets it for a channel.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| channelId             | String     | Required: The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
| image                 | String     | Required: Image url.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| resource              | String     | Image

## YoutubeDataApi.unsetWatermark
Deletes a channel's watermark image.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| channelId             | String     | Required: The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.getVideos
Returns a list of videos that match the API request parameters.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| part                  | List       | Required: The part parameter specifies an array of one or more video resource properties that the API response will include.If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`,`fileDetails`,`id`,`liveStreamingDetails`,`localizations`,`player`,`processingDetails`,`recordingDetails`,`snippet`,`statistics`,`status`,`suggestions`,`topicDetails`
| chart                 | String     | The chart parameter identifies the chart that you want to retrieve.
| id                    | String     | The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
| myRating              | String     | This parameter can only be used in a properly authorized request. Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user. Acceptable values are: `dislike` – Returns only videos disliked by the authenticated user. `like` – Returns only video liked by the authenticated user.
| hl                    | String     | The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method. If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
| maxResults            | Number     | The maxResults parameter specifies the maximum number of items that should be returned in the result set.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| pageToken             | String     | The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
| regionCode            | String     | The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
| videoCategory         | String     | The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category. The default value is 0.

## YoutubeDataApi.uploadsVideo
Uploads a video to YouTube and optionally sets the video's metadata.

| Field                        | Type       | Description
|------------------------------|------------|----------
| accessToken                  | credentials| Required: Access token obtained from Google.com
| part                         | String     | The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`,`fileDetails`,`id`,`liveStreamingDetails`,`localizations`,`player`,`processingDetails`,`recordingDetails`, `snippet`, `statistics`, `status`, `suggestions`, `topicDetails`
| autoLevels                   | String     | The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
| notifySubscribers            | String     | The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers. The default value is True.
| onBehalfOfContentOwner       | String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
| onBehalfOfContentOwnerChannel| String     | The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
| stabilize                    | String     | The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
| file                         | String     | Required: Video file.
| resource                     | JSON       | A video resource.

## YoutubeDataApi.updateVideo
Updates a video's metadata.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| part       | String     | Required: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`,`fileDetails`,`id`,`liveStreamingDetails`,`localizations`,`player`,`processingDetails`,`recordingDetails`, `snippet`, `statistics`, `status`, `suggestions`, `topicDetails`
| resource   | JSON       | Required: A video resource.

## YoutubeDataApi.rateVideo
Add a like or dislike rating to a video or remove a rating from a video.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: Access token obtained from Google.com
| id         | String     | Required: The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
| rating     | String     | `dislike`, `like` or `none`

## YoutubeDataApi.getVideosRating
Retrieves the ratings that the authorized user gave to a list of specified videos.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| id                    | String     | Required: The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
| onBehalfOfContentOwner| String     | Required: The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.createAbuseVideoContentReport
Reports a video for containing abusive content.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| videoId               | String     | Required: Video id.
| reasonId              | String     | Required: Reason id.
| secondaryReasonId     | String     | Secondary Reason id.
| comments              | String     | Comments
| language              | String     | Language
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

## YoutubeDataApi.deleteVideo
Deletes a YouTube video.

| Field                 | Type       | Description
|-----------------------|------------|----------
| accessToken           | credentials| Required: Access token obtained from Google.com
| id                    | String     | Required: The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
| onBehalfOfContentOwner| String     | The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
