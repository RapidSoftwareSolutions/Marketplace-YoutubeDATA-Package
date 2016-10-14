// REMOVE

const lib     = require('../lib/functions');
const Youtube = require("youtube-api")
const opn = require("opn")

module.exports = (req, res) => {
    let oauth = Youtube.authenticate({
        type: "oauth",
        client_id: '316420278333-hggdlnmh1hvu546503job54tie3lq85b.apps.googleusercontent.com',
        client_secret: 'hFytWP229DKRL00Qz25FYv-i',
        redirect_url: 'http://localhost:8080/api/Youtube/token'
    });

    opn(oauth.generateAuthUrl({
        access_type: "offline"
      , scope: [
            "https://www.googleapis.com/auth/youtubepartner", 
            "https://www.googleapis.com/auth/youtube.force-ssl", 
            "https://www.googleapis.com/auth/youtube.upload", 
            "https://www.googleapis.com/auth/youtube", 
            "https://www.googleapis.com/auth/youtube.readonly"
        ]
    }));

    res.end();
}