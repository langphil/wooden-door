const request = require('supertest');
const app = require('../app');

describe('Test the server is up', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
})
