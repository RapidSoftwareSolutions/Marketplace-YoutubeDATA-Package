'use strict';

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs');

const PORT          = process.env.PORT || 8080;

global.PACKAGE_NAME = "Youtube";

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);


/*
REMOVE THIS BLOCK ON PRODUCTION 
app.get(`/api/${PACKAGE_NAME}/token`, (req, res) => {
    const Youtube = require("youtube-api")

    let oauth = Youtube.authenticate({
        type: "oauth",
        client_id: '316420278333-hggdlnmh1hvu546503job54tie3lq85b.apps.googleusercontent.com',
        client_secret: 'hFytWP229DKRL00Qz25FYv-i',
        redirect_url: 'http://localhost:8080/api/Youtube/token'
    });

    console.log(req.query.code)

    oauth.getToken(req.query.code, (err, tokens) => {
        console.log(err)
        console.log(tokens);
        res.send(tokens);
    });
});
*/

let callback = (err, res, r) => {
    let response = {
        callback     : "",
        contextWrites: {}
    };
        
    if(err) {
        response.callback = 'error';
        response.contextWrites[r.to] = typeof err == 'object' ? JSON.stringify(err) : err;
    } else {
        response.callback = 'success';
        response.contextWrites[r.to] = typeof r.result == 'object' ? JSON.stringify(r.result) : r.result;
    }

    res.status(200).send(response);
}

fs.readdirSync('api/').forEach((file) => {
    try {
        var type    = file.substring(file.lastIndexOf('.') + 1),
            route   = file.substring(0, file.length - type.length - 1);

       if(!type == 'js') return;

       let fn = require(`./api/${file}`);
       app.all(`/api/${PACKAGE_NAME}/${route}`, function(req, res) {return fn(req, res, callback)});
    } catch(e) { 
        console.log(e);
        return; 
    }
});

app.listen(PORT);
module.exports = app;

