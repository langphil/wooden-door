const request = require('supertest');
const app = require('../controllers/app');

describe('Test the server is up', () => {
    test('It should respond to the GET method for "/"', () => {
        return request(app).get('/').expect(200);
    });

    test('It should respond to the POST method for "/set"', () => {
        return request(app).get('/set').expect(200);
    })

    test('It should respond to the POST method for "/set"', () => {
        return request(app).get('/get').expect(200);
    })
})
