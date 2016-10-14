let assert = require('chai').assert;
let request = require('supertest-as-promised');

let app = require('../index');


let accessToken = 'Y7QMZJIJIUYTQWO2DLK6RVAHQAAOTF7R',
    text = 'test',
    data = 'http://www.externalharddrive.com/waves/animal/cow.wav',
    textId = '8156ed17-46ee-462b-8220-4029cdf3d7fe',
    sessionId = '1234',
    id = 'hey' +  Date.now(),
    newid = 'yo' +  Date.now(),
    value = '123',
    expression = '321',
    entityId;

describe('/Wit.ai Package', function() {
    it('/getSentenceMeaning', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getSentenceMeaning')
        .send({args: { accessToken, text }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAudioMeaning', function() {
        this.timeout(30000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAudioMeaning')
        .send({args: { accessToken, data, textId }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getBotNextStep', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getBotNextStep')
        .send({args: { accessToken, sessionId }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getEntities', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getEntities')
        .send({args: { accessToken }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/createEntity', function(done) {
        this.timeout(100000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createEntity')
        .send({args: { accessToken, id }})
        .expect(200)
        .then((data) => {
<<<<<<< HEAD
            console.log(data.body)
=======
            entityId = JSON.parse(data.body.contextWrites.to)['id'];
>>>>>>> fd0ada3fce94a20242f7ac3ba00e7ecebb842d1d
            assert.equal(data.body.callback, 'success');

            setTimeout(done, 10000);
        });
    });

    it('/getEntityValues', function() {
        this.timeout(10000);
        //setTimeout(function() {
            return request(app)
            .post('/api/'+ global.PACKAGE_NAME +'/getEntityValues')
            .send({args: { accessToken, entityId }})
            .expect(200)
            .then((data) => {
                assert.equal(data.body.callback, 'success');
            });
        //}, 3000);
    });

    it('/addEntityValues', function(done) {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/addEntityValues')
        .send({args: { accessToken, entityId, value }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
            setTimeout(done, 3000);
        });
    });
    

    it('/updateEntityValues', function(done) {
        this.timeout(100000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/updateEntityValues')
        .send({args: { accessToken, entityId, id: newid }})
        .expect(200)
        .then((data) => {
            entityId = JSON.parse(data.body.contextWrites.to)['id'];
            setTimeout(done, 10000);
            //assert.equal(data.body.callback, 'success');
        });
    });

    it('/createEntityExpression', function(done) {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createEntityExpression')
        .send({args: { accessToken, entityId, entityValue: value, expression }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');

            setTimeout(done, 3000);
        });
    });

    it('/removeExpression', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/removeExpression')
        .send({args: { accessToken, entityId, entityValue: value, expressionValue: expression }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/removeEntityValue', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/removeEntityValue')
        .send({args: { accessToken, entityId, entityValue: value }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/deleteEntity', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteEntity')
        .send({args: { accessToken, entityId }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });
});
