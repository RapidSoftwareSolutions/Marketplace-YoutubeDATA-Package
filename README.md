# Wit.ai Package
Wit.ai makes it easy for developers to build applications and devices that you can talk or text to.
* Domain: wit.ai
* Credentials: accessToken

## How to get credentials: 
0. Login to your [Wit.Ai console](https://wit.ai) 
1. Choice app or create new.
2. Go to app settings https://wit.ai/YOUR_ACCOUNT/YOUR_APP_NAME/settings
3. Copy and save your _Server Access Token_.

## TOC: 
* [getSentenceMeaning](#getSentenceMeaning)
* [getAudioMeaning](#getAudioMeaning)
* [getBotNextStep](#getBotNextStep)
* [getEntities](#getEntities)
* [createEntity](#createEntity)
* [getEntityValues](#getEntityValues)
* [updateEntityValues](#updateEntityValues)
* [deleteEntity](#deleteEntity)
* [addEntityValues](#addEntityValues)
* [removeEntityValue](#removeEntityValue)
* [createEntityExpression](#createEntityExpression)
* [removeExpression](#removeExpression)
 
<a name="getSentenceMeaning"/>
## Wit.ai.getSentenceMeaning
Returns the extracted meaning from a sentence, based on the app data. Note that you may use JSONP to do cross-domain/cross-origin requests.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| text       | String     | User’s query. Length must be > 0 and < 256
| textId     | String     | A specific Id you want to assign to the message that will be processed. If not set, Wit.ai will auto generate one for you
| threadId   | String     | A specific Id that will let you group requests per conversation

#### Request example
```json
{	
	"accessToken": "...",
	"text": "how many people between Tuesday and Friday",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":  {
		    "msg_id": "387b8515-0c1d-42a9-aa80-e68b66b66c27",
		    "_text": "how many people between Tuesday and Friday",
		    "entities": {
		      "metric": [ {
		        "metadata": "{'code': 324}",
		        "value": "metric_visitor",
		        "confidence": 0.9231
		      } ],
		      "datetime": [ {
		        "value": {
		          "from": "2014-07-01T00:00:00.000-07:00",
		          "to": "2014-07-02T00:00:00.000-07:00"
		        },
		        "confidence": 1
		      }, {
		        "value": {
		          "from": "2014-07-04T00:00:00.000-07:00",
		          "to": "2014-07-05T00:00:00.000-07:00"
		        },
		        "confidence": 1
		      } ]
		    }
		  }
		}
	}
}
```

<a name="getAudioMeaning"/>
## Wit.ai.getAudioMeaning
Returns the meaning extracted from an audio file or stream. We do recommend you to stream the audio input as it will reduce the latency, hence improve the user experience.


| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The api key obtained from wit.ai.
| data          | String     | Link to `wav` or `mpeg3` or `ulaw` or `raw` audio file.
| textId        | String     | A specific Id you want to assign to the message that will be processed. If not set, Wit.ai will auto generate one for you
| threadId      | String     | A specific Id that will let you group requests per conversation
| outcomesNumber| String     | The number of n-best outcomes you want to get back. default is 1

#### Request example
```json
{	
	"accessToken": "...",
	"data": "http://www.externalharddrive.com/waves/animal/cow.wav",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getBotNextStep"/>
## Wit.ai.getBotNextStep
Returns what your bot should do next. The next step can be either answering to the user, performing an action, or waiting for further requests.


| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| sessionId  | String     | The session_id is a unique ID you generate on your side to group messages from the same user request/conversation. When you start a new conversation, you should generate a new one. You should generate a new one, even when the user is the same.
| text       | String     | A message from the user. Length must be > 0 and < 256. This should only be set at the first call until you get type=”stop”
| context    | JSON       | The object representing the session state. You can pass the context either as a URL param or in the body of your POST.

#### Request example
```json
{	
	"accessToken": "...",
	"sessionId": "qwerty123",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":  {
		    "type": "merge",
		    "entities": {"location": [{"body": "Brussels",
		                               "value": {"type": "value",
		                                         "value": "Brussels",
		                                         "suggested": true},
		                               "start": 11,
		                               "end": 19,
		                               "entity": "location"}]},
		    "confidence": 1
		  }
		}
	}
}
```

<a name="getEntities"/>
## Wit.ai.getEntities
Returns a list of available entities for the app.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":[
		    "wit$amount_of_money",
		    "wit$contact",
		    "wit$datetime",
		    "wit$on_off",
		    "wit$phrase_to_translate",
		    "wit$temperature"
		  ]
		}
	}
}
```

<a name="createEntity"/>
## Wit.ai.createEntity
Creates a new entity with the given attributes.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| id         | String     | ID or name of the requested entity
| description| String     | Short sentence describing this entity
| values     | JSON       | Possible values for this entity
| lookups    | JSON       | Currently only supporting “trait” or “keywords” Search Strategy. If not provided, it will default to “keywords”.Traits are only available for new Bot Engine apps

#### Request example
```json
{	
	"accessToken": "...",
	"id": "favorite_city",
	"description": "A city that I like",
	"values":[{"value":"Paris",
                  "expressions":["Paris",
                                 "City of Light",
                                 "Capital of France"]}]}
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":   {
			    "name" : "favorite_city",
			    "lang" : "en",
			    "lookups" : [ "keywords" ],
			    "builtin" : false,
			    "doc" : "A city that I like",
			    "id" : "5418abc7-cc68-4073-ae9e-3a5c3c81d965"
		  	}
		}
	}
}
```

<a name="getEntityValues"/>
## Wit.ai.getEntityValues
Returns all the expressions validated for an entity. We currently limit to the first 1000 values (with the first 50 expressions)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| entityId   | String     | ID or name of the entity.

#### Request example
```json
{	
	"accessToken": "...",
	"entityId": "first_name"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "builtin" : false,
			  "doc" : "User-defined entity",
			  "id" : "571979db-f6ac-4820-bc28-a1e0787b98fc",
			  "lang" : "en",
			  "lookups" : [ "keywords", "free-text" ],
			  "name" : "first_name",
			  "values" : [ {
			    "value" : "Willy",
			    "expressions" : [ "Willy" ]
			  }, {
			    "value" : "Laurent",
			    "expressions" : [ "Laurent" ]
			  }, {
			    "value" : "Julien",
			    "expressions" : [ "Julien" ]
			  }, {
			    "value" : "Alex",
			    "expressions" : [ "Alex" ]
			  } ]
			}
		}
	}
}
```

<a name="updateEntityValues"/>
## Wit.ai.updateEntityValues
Updates an entity with the given attributes.


| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| entityId   | String     | ID or name of the entity.
| id         | String     | New ID or name of the entity
| description| String     | Short sentence describing this entity
| values     | JSON       | Possible values for this entity

#### Request example
```json
{	
	"accessToken": "favorite_city",
	"entityId": "",
	"values":[
       {"value":"Paris",
        "expressions":["Paris",
                       "City of Light",
                       "Capital of France"],
        "metadata":"{\"cityId\":342,\"countryId\":12}"},
       {"value":"Seoul",
       "expressions":["Seoul",
                      "서울",
                      "Kimchi paradise"],
       "metadata":"city_343"}]
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "builtin" : false,
			  "doc" : "These are cities worth going to",
			  "name" : "favorite_city",
			  "id" : "5418abc7-cc68-4073-ae9e-3a5c3c81d965",
			  "lang" : "en",
			  "lookups" : [ "keywords" ]
			}
		}
	}
}
```

<a name="deleteEntity"/>
## Wit.ai.deleteEntity
Permanently remove the entity.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| entityId   | String     | ID or name of the entity.

#### Request example
```json
{	
	"accessToken": "...",
	"entityId": "favorite_city"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			    "deleted" : "5418abc7-cc68-4073-ae9e-3a5c3c81d965"
			 }
		}
	}
}
```

<a name="addEntityValues"/>
## Wit.ai.addEntityValues
Add a possible value into the list of values for the entity.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| entityId   | String     | ID or name of the entity.
| value      | String     | Canonical value of the entity
| expressions| JSON       | Ways of expressing this canonical value (JSON array)
| metadata   | String     | Metadata you want to attach to this value, will be sent back in runtime.

#### Request example
```json
{	
	"accessToken": "...",
	"entityId": "...",
	"value": "London",
	"expressions": ["London"],
    "metadata": "CITY_1234"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "builtin" : false,
			  "doc" : "These are cities worth going to",
			  "exotic" : false,
			  "id" : "57475251-ba5a-412b-85ec-3ab6f778d6fa",
			  "lang" : "en",
			  "lookups" : [ "keywords" ],
			  "name" : "favorite_city"
			}
		}
	}
}
```

<a name="removeEntityValue"/>
## Wit.ai.removeEntityValue
Delete a canonical value from the entity.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| entityId   | String     | ID or name of the entity.
| entityValue| String     | Canonical value of the entity

#### Request example
```json
{	
	"accessToken": "...",
	"entityId": "favorite_city",
	"entityValue": "Paris"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted" : "Paris"
			}
		}
	}
}
```

<a name="createEntityExpression"/>
## Wit.ai.createEntityExpression
Create a new expression for an entity

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The api key obtained from wit.ai.
| entityId   | String     | ID or name of the entity.
| entityValue| String     | Canonical value of the entity
| expression | String     | New expression for the canonical value of the entity. Must be shorter than 256 characters.

#### Request example
```json
{	
	"accessToken": "...",
	"entityId": "favorite_city",
	"entityValue": "Paris",
	"expression": "Camembert city"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "builtin" : false,
			  "doc" : "These are cities worth going to",
			  "exotic" : false,
			  "id" : "57475251-ba5a-412b-85ec-3ab6f778d6fa",
			  "lang" : "en",
			  "lookups" : [ "keywords" ],
			  "name" : "favorite_city"
			}
		}
	}
}
```

<a name="removeExpression"/>
## Wit.ai.removeExpression
Delete an expression of the canonical value of the entity.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The api key obtained from wit.ai.
| entityId       | String     | ID or name of the entity.
| entityValue    | String     | Canonical value of the entity
| expressionValue| String     | Expression value to delete.

#### Request example
```json
{	
	"accessToken": "...",
	"entityId": "favorite_city",
	"entityValue": "Paris",
	"expressionValue": "Camembert city"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted" : "Camembert city"
			}
		}
	}
}
```

