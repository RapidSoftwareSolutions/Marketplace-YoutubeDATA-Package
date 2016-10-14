module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
<<<<<<< HEAD
    "package": "YoutubeDataApi",
    "tagline": "Youtube Data API",
    "description": "Add YouTube features to your application, including the ability to upload videos, create and manage playlists, and more.",
    "image": "http:\/\/logo.clearbit.com\/youtube.com",
    "repo": "https:\/\/github.com\/RapidSoftwareSolutions\/Marketplace-YoutubeDATA-Package",
    "accounts": {
        "domain": "youtube.com",
        "String": ["accessToken"]
    },
    "blocks": [{
        "name": "getActivities",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, snippet"
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities."
        }, {
            "name": "home",
            "type": "String",
            "info": "For requests that set this parameter, the API response contains items similar to those that a logged-out user would see on the YouTube home page. Note that this parameter can only be used in a properly authorized request. (deprecated)"
        }, {
            "name": "mine",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the authenticated user's activities."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }, {
            "name": "publishedAfter",
            "type": "String",
            "info": "The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format."
        }, {
            "name": "publishedBefore",
            "type": "String",
            "info": "The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format."
        }, {
            "name": "regionCode",
            "type": "String",
            "info": "The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {

        /*
=======
        'package': 'WitAI',
        "tagline": "Wit.ai API Package",
        "description": "Wit.ai makes it easy for developers to build applications and devices that you can talk or text to.",
        'image': 'https://img.stackshare.io/service/767/Qe0MWT5x.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-wit.ai-package',
        'accounts': {
            'domain': 'wit.ai',
            'credentials': [
                'accessToken',
            ]
        },
        'blocks': [{
            "name":"getSentenceMeaning",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "The api key obtained from wit.ai.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "User’s query. Length must be > 0 and < 256",
                },
                {
                    name: "textId",
                    type: "String",
                    info: "A specific Id you want to assign to the message that will be processed. If not set, Wit.ai will auto generate one for you"
                },
                {
                    name: "threadId",
                    type: "String",
                    info: "A specific Id that will let you group requests per conversation"
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
>>>>>>> fd0ada3fce94a20242f7ac3ba00e7ecebb842d1d
        {
            "snippet": {
                
            },
            "contentDetails": {
                "bulletin": {
                    "resourceId": {
                        "channelId": "UCKfpjMinagvyf9cKHiBcmGw"
                    }
                }
            }
        }*/
        "name": "createActivity",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, snippet"
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "An activity resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getCaptions",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet"
        }, {
            "name": "videoId",
            "type": "String",
            "info": "The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
            {
                snippet: {
                    "videoId": "hAZdovB2JaE",
                    "language": "en",
                    "name": "Test"
                }
            }
        */
        "name": "createCaption",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "sync",
            "type": "String",
            "info": "The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions. You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "An caption resource."
        }, {
            "name": "file",
            "type": "String",
            "info": "A file url."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
            {
                "id": "UIe3Zbwk7KKtPcz0iz18KtDJo_OpytE80jxAHg7CBoX0Cj - 6 ugayjw == ",
                "snippet": {
                    "isDraft": true
                }
            }
        */
        "name": "updateCaption",
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "sync",
            "type": "String",
            "info": "The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions. You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "An caption resource."
        }, {
            "name": "file",
            "type": "String",
            "info": "A file url."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "downloadCaption",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "tfmt",
            "type": "String",
            "info": "The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format. Supported values are: `sbv` – SubViewer subtitle; `scc` – Scenarist Closed Caption format; `srt` – SubRip subtitle; `ttml` – Timed Text Markup Language caption; `vtt` – Web Video Text Tracks caption"
        }, {
            "name": "tlang",
            "type": "String",
            "info": "The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteCaption",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createChannelBanners",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "image",
            "type": "String",
            "info": "Image url."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getChannels",
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. (`auditDetails`,`brandingSettings`,`contentDetails`,`contentOwnerDetails`,`id`,`invideoPromotion`,`localizations`,`snippet`,`statistics`,`status`,`topicDetails`)"
        }, {
            "name": "categoryId",
            "type": "String",
            "info": "The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category."
        }, {
            "name": "forUsername",
            "type": "String",
            "info": "The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username."
        }, {
            "name": "managedByMe",
            "type": "String",
            "info": "Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided."
        }, {
            "name": "mine",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user."
        }, {
            "name": "hl",
            "type": "String",
            "info": "If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language."
        }, {
            "name": "maxResults",
            "type": "String",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "updateChannel",
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings, invideoPromotion, or localizations. (You can only update any one of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in the part that the parameter value specifies."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A channel resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getChannelSections",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the section. If you set part=snippet, the API response will also contain all of those nested properties.The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, localizations, snippet, targeting"
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The channelId parameter specifies a YouTube channel ID. If a request specifies a value for this parameter, the API will only return the specified channel's sections."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of IDs that uniquely identify the channelSection resources that are being retrieved. In a channelSection resource, the id property specifies the section's ID."
        }, {
            "name": "mine",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the channel sections associated with the authenticated user's YouTube channel."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method. If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
            {   "snippet": {        "type": "allPlaylists",         "style": "horizontalRow"    } }
        */

        "name": "createChannelSection",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the section. If you set part=snippet, the API response will also contain all of those nested properties.The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, localizations, snippet, targeting"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "onBehalfOfContentOwnerChannel",
            "type": "String",
            "info": "The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies."
        }, {
            "name": "resource",
            "type": "String",
            "info": "An channelSection resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "updateChannelSection",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the section. If you set part=snippet, the API response will also contain all of those nested properties.The following list contains the part names that you can include in the parameter value and the quota cost for each part: contentDetails, id, localizations, snippet, targeting"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "resource",
            "type": "String",
            "info": "An channelSection resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteChannelSection",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the ID that uniquely identifies the channel section that is being deleted. In a channelSection resource, the id property specifies the section's ID."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getComments",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include. The list below contains the part names that you can include in the parameter value and the quota cost for each part: id, snippet"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID."
        }, {
            "name": "parentId",
            "type": "String",
            "info": "The parentId parameter specifies the ID of the comment for which replies should be retrieved."
        }, {
            "name": "maxResults",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved."
        }, {
            "name": "textFormat",
            "type": "String",
            "info": "This parameter indicates whether the API should return comments formatted as HTML or as plain text. The default value is html. Acceptable values are:`html` – Returns the comments in HTML format. This is the default value. `plainText` – Returns the comments in plain text format."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
            {   "snippet": {        "textOriginal": "from api",         "parentId": "z12tijhiftqyjn4q404cif0jfvnzxbo5mr40k"    } }
        */

        "name": "replyToComment",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `id`, `snippet`"
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "An Comment resource"
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {

         /*
            {  "id": "z12tijhiftqyjn4q404cif0jfvnzxbo5mr40k.1476448035799735", "snippet": {        "textOriginal": "from api"   } }
        */


        "name": "updateComment",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `id`, `snippet`"
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "An Comment resource"
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "markCommentsAsSpam",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "setCommentsModerationStatus",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam."
        }, {
            "name": "moderationStatus",
            "type": "String",
            "info": "Identifies the new moderation status of the specified comments. Acceptable values are: `heldForReview` – Marks a comment as awaiting review by a moderator. `published` – Clears a comment for public display. `rejected` – Rejects a comment as being unfit for display. This action also effectively hides all replies to the rejected comment."
        }, {
            "name": "banAuthor",
            "type": "String",
            "info": "The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteComment",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the comment ID for the resource that is being deleted."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getCommentThreads",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include. The following list contains the part names that you can include in the parameter value and the quota cost for each part: id, replies, snippet"
        }, {
            "name": "allThreadsRelatedToChannelId",
            "type": "String",
            "info": "The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos."
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved."
        }, {
            "name": "videoId",
            "type": "String",
            "info": "The videoId parameter instructs the API to return comment threads associated with the specified video ID."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set."
        }, {
            "name": "moderationStatus",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter to limit the returned comment threads to a particular moderation state. Acceptable values are: `heldForReview` – Retrieve comment threads that are awaiting review by a moderator. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment are awaiting review. `likelySpam` – Retrieve comment threads classified as likely to be spam. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment is considered likely to be spam. `published` – Retrieve threads of published comments. This is the default value. A comment thread can be included in the response if its top-level comment has been published."
        }, {
            "name": "order",
            "type": "String",
            "info": "The order parameter specifies the order in which the API response should list comment threads. Valid values are: `time` - Comment threads are ordered by time. This is the default behavior. `relevance` - Comment threads are ordered by relevance."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved."
        }, {
            "name": "searchTerms",
            "type": "String",
            "info": "The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms."
        }, {
            "name": "textFormat",
            "type": "String",
            "info": "Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text. The default value is html. Acceptable values are: `html` – Returns the comments in HTML format. This is the default value. `plainText` – Returns the comments in plain text format."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
        {  
            "snippet": {
                "channelId": "UCKfpjMinagvyf9cKHiBcmGw",        
                "topLevelComment": {
                    "snippet": {
                        "textOriginal": "Top level comment api call"
                    }
                }
            }

        }
        */
        "name": "createCommentThread",
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part:`id`,`replies`,`snippet`."
        }, {
            "name": "resource",
            "type": "String",
            "info": "An CommentThread resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
        {  
            "id": "z12tijhiftqyjn4q404cif0jfvnzxbo5mr40k",
            "snippet": {
                "channelId": "UCKfpjMinagvyf9cKHiBcmGw",        
                "topLevelComment": {
                    "snippet": {
                        "textOriginal": "Top level comment api call"
                    }
                }
            }

        }
        */

        "name": "updateCommentThread",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. The list below contains the part names that you can include in the parameter value and the quota cost for each part:`id`,`replies`,`snippet`."
        }, {
            "name": "resource",
            "type": "String",
            "info": "An CommentThread resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getGuideCategories",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID."
        }, {
            "name": "regionCode",
            "type": "String",
            "info": "The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter specifies the language that will be used for text values in the API response. The default value is en-US."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getApplicationLanguages",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 1 unit."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getContentRegions",
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 1 unit."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getPlaylistItems",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `status`"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of one or more unique playlist item IDs."
        }, {
            "name": "playlistId",
            "type": "String",
            "info": "The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }, {
            "name": "videoId",
            "type": "String",
            "info": "The videoId parameter specifies that the request should return only the playlist items that contain the specified video."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {

        /*
        {  
            "id": "z12tijhiftqyjn4q404cif0jfvnzxbo5mr40k",
            "snippet": {
                "playlistId": "PLchbjh4kWFjPRLTV7cYkz7XQ7Ofmi9x99",        
                "resourceId": {
                   "kind": "youtube#video",
                  "videoId": "hAZdovB2JaE"
                }
            }

        }
        */

        "name": "createPlaylistItem",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `status`"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A playlistItem resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "updatePlaylistItem",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings. The list below contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `status`"
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A playlistItem resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deletePlaylistItem",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getPlaylists",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for  `contentDetails`,`id`, `localizations`, `player`, `snippet`, `status`,"
        }, {
            "name": "channelId",
            "type": "String",
            "info": "This value indicates that the API should only return the specified channel's playlists."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID."
        }, {
            "name": "mine",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "onBehalfOfContentOwnerChannel",
            "type": "String",
            "info": "The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createPlaylist",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for  `contentDetails`,`id`, `localizations`, `player`, `snippet`, `status`,"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "onBehalfOfContentOwnerChannel",
            "type": "String",
            "info": "The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A playlist resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "updatePlaylist",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties. The list below contains the part names that you can include in the parameter value and the quota cost for  `contentDetails`,`id`, `localizations`, `player`, `snippet`, `status`,"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A playlist resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deletePlaylist",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getSearchResults",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet."
        }, {
            "name": "forContentOwner",
            "type": "String",
            "info": "The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided."
        }, {
            "name": "forDeveloper",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. The forDeveloper parameter can be used in conjunction with optional search parameters like the q parameter."
        }, {
            "name": "forMine",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video."
        }, {
            "name": "relatedToVideoId",
            "type": "String",
            "info": "The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video."
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The channelId parameter indicates that the API response should only contain resources created by the channel. "
        }, {
            "name": "channelType",
            "type": "String",
            "info": "The channelType parameter lets you restrict a search to a particular type of channel."
        }, {
            "name": "eventType",
            "type": "String",
            "info": "The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video."
        }, {
            "name": "location",
            "type": "String",
            "info": "The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427)."
        }, {
            "name": "locationRadius",
            "type": "String",
            "info": "The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area. The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "order",
            "type": "String",
            "info": "The order parameter specifies the method that will be used to order resources in the API response. The default value is relevance. Acceptable values are: `date` – Resources are sorted in reverse chronological order based on the date they were created. `rating` – Resources are sorted from highest to lowest rating. `relevance` – Resources are sorted based on their relevance to the search query. This is the default value for this parameter. `title` – Resources are sorted alphabetically by title. `videoCount` – Channels are sorted in descending order of their number of uploaded videos. `viewCount` – Resources are sorted from highest to lowest number of views. For live broadcasts, videos are sorted by number of concurrent viewers while the broadcasts are ongoing."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }, {
            "name": "publishedAfter",
            "type": "String",
            "info": "The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)."
        }, {
            "name": "publishedBefore",
            "type": "String",
            "info": "The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)."
        }, {
            "name": "q",
            "type": "String",
            "info": "Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either 'boating' or 'sailing', set the q parameter value to boating|sailing. Similarly, to search for videos matching either 'boating' or 'sailing' but not 'fishing', set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C."
        }, {
            "name": "regionCode",
            "type": "String",
            "info": "The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code."
        }, {
            "name": "relevanceLanguage",
            "type": "String",
            "info": "The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term."
        }, {
            "name": "safeSearch",
            "type": "String",
            "info": "The safeSearch parameter indicates whether the search results should include restricted content as well as standard content. Acceptable values are:`moderate` – YouTube will filter some content from search results and, at the least, will filter content that is restricted in your locale. Based on their content, search results could be removed from search results or demoted in search results. This is the default parameter value.`none` – YouTube will not filter the search result set. `strict` – YouTube will try to exclude all restricted content from the search result set. Based on their content, search results could be removed from search results or demoted in search results."
        }, {
            "name": "topicId",
            "type": "String",
            "info": "The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID."
        }, {
            "name": "type",
            "type": "String",
            "info": "The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `closedCaption`, `none`)"
        }, {
            "name": "videoCategoryId",
            "type": "String",
            "info": "The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video."
        }, {
            "name": "videoDefinition",
            "type": "String",
            "info": "The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video. (`2d`, `3d`, `any`)"
        }, {
            "name": "videoDuration",
            "type": "String",
            "info": "The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `long`, `medium`, `short`)"
        }, {
            "name": "videoEmbeddable",
            "type": "String",
            "info": "The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video."
        }, {
            "name": "videoLicense",
            "type": "String",
            "info": "The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `creativeCommon`, `youtube`)"
        }, {
            "name": "videoSyndicated",
            "type": "String",
            "info": "The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `true`)"
        }, {
            "name": "videoType",
            "type": "String",
            "info": "The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video. (`any`, `episode`, `movie`)"
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getSubscriptions",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `subscriberSnippet`"
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID."
        }, {
            "name": "mine",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions."
        }, {
            "name": "myRecentSubscribers",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first)."
        }, {
            "name": "mySubscribers",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order."
        }, {
            "name": "forChannelId",
            "type": "String",
            "info": "The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "onBehalfOfContentOwnerChannel",
            "type": "String",
            "info": "The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies."
        }, {
            "name": "order",
            "type": "String",
            "info": "The order parameter specifies the method that will be used to sort resources in the API response. The default value is SUBSCRIPTION_ORDER_RELEVANCE. Acceptable values are: `alphabetical` – Sort alphabetically. `relevance` – Sort by relevance. `unread` – Sort by order of activity."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        /*
        {
            "snippet": {
                "resourceId": {
                    "kind": "youtube#channel",
                    "channelId": "UCKfpjMinagvyf9cKHiBcmGw"
                }
            }
        }
        */

        "name": "addSubscription",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`, `id`, `snippet`, `subscriberSnippet`"
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A subscription resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteSubscription",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "setThumbnail",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "videoId",
            "type": "String",
            "info": "The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided."
        }, {
            "name": "image",
            "type": "String",
            "info": "Image url."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getVideoAbuseReportReasons",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet. The snippet part has a quota cost of 2 units."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getVideoCategories",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving."
        }, {
            "name": "regionCode",
            "type": "String",
            "info": "The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter specifies the language that should be used for text values in the API response. The default value is en_US."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {

        /*
            {
              "timing": {
                "type": 'offsetFromStart',
                "offsetMs": 3000,
                "durationMs": 4000
              },
              "position": {
                "type": "corner",
                "cornerPosition": "topRight"
              },
              "imageUrl": "http://google.com",
              "imageBytes": "2048",
            }
        */

        "name": "setWatermark",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The channelId parameter specifies the YouTube channel ID for which the watermark is being provided."
        }, {
            "name": "image",
            "type": "String",
            "info": "Image url."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "resource",
            "type": "String",
            "info": "Image"
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "unsetWatermark",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "channelId",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getVideos",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`,`fileDetails`,`id`,`liveStreamingDetails`,`localizations`,`player`,`processingDetails`,`recordingDetails`,`snippet`,`statistics`,`status`,`suggestions`,`topicDetails`"
        }, {
            "name": "chart",
            "type": "String",
            "info": "The chart parameter identifies the chart that you want to retrieve."
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID."
        }, {
            "name": "myRating",
            "type": "String",
            "info": "This parameter can only be used in a properly authorized request. Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user. Acceptable values are: `dislike` – Returns only videos disliked by the authenticated user. `like` – Returns only video liked by the authenticated user."
        }, {
            "name": "hl",
            "type": "String",
            "info": "The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method. If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language."
        }, {
            "name": "maxResults",
            "type": "Number",
            "info": "The maxResults parameter specifies the maximum number of items that should be returned in the result set."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "pageToken",
            "type": "String",
            "info": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved."
        }, {
            "name": "regionCode",
            "type": "String",
            "info": "The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code."
        }, {
            "name": "videoCategory",
            "type": "String",
            "info": "The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category. The default value is 0."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "uploadsVideo",
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`,`fileDetails`,`id`,`liveStreamingDetails`,`localizations`,`player`,`processingDetails`,`recordingDetails`, `snippet`, `statistics`, `status`, `suggestions`, `topicDetails`"
        }, {
            "name": "autoLevels",
            "type": "String",
            "info": "The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color."
        }, {
            "name": "notifySubscribers",
            "type": "String",
            "info": "The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers. The default value is True."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }, {
            "name": "onBehalfOfContentOwnerChannel",
            "type": "String",
            "info": "The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies."
        }, {
            "name": "stabilize",
            "type": "String",
            "info": "The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions."
        }, {
            "name": "file",
            "type": "String",
            "info": "Video file."
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A video resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "updateVideo",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "part",
            "type": "String",
            "info": "The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. The following list contains the part names that you can include in the parameter value and the quota cost for each part: `contentDetails`,`fileDetails`,`id`,`liveStreamingDetails`,`localizations`,`player`,`processingDetails`,`recordingDetails`, `snippet`, `statistics`, `status`, `suggestions`, `topicDetails`"
        }, {
            "name": "resource",
            "type": "JSON",
            "info": "A video resource."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "rateVideo",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed."
        }, {
            "name": "rating",
            "type": "String",
            "info": "`dislike`, `like` or `none`"
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getVideosRating",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createAbuseVideoContentReport",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "videoId",
            "type": "String",
            "info": "Video id."
        }, {
            "name": "reasonId",
            "type": "String",
            "info": "Reason id."
        }, {
            "name": "secondaryReasonId",
            "type": "String",
            "info": "Secondary Reason id."
        }, {
            "name": "comments",
            "type": "String",
            "info": "Comments"
        }, {
            "name": "language",
            "type": "String",
            "info": "Language"
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteVideo",
        
        "args": [{
            "name": "accessToken",
            "type": "String",
            "info": "Required: Access token obtained from Google.com"
        }, {
            "name": "id",
            "type": "String",
            "info": "The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID."
        }, {
            "name": "onBehalfOfContentOwner",
            "type": "String",
            "info": "The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner."
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }]
})
};
