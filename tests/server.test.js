const request = require('supertest');
const server = require('../server');
const app = require('../controllers/app');

describe('Test the server is up', () => {

  test('It should respond to the GET method for "/"', () => {
    return request(app).get('/').expect(200);
  });

  test('It should respond to the POST method for "/set"', () => {
    return request(app).get('/set?somekey=foo').expect(200);
  });

  test('It should respond to the POST method for "/set"', () => {
    return request(app).get('/get').expect(200);
  });
});

describe('Routes can accept query strings', () => {

  test('It should be able to receive and store data from a query string', () => {
    return request(app).get('/set?somekey=foo')
    .expect(200)
    .then((req) => {
      expect(someKey).toBe('foo');
    });
  });

  test('It should be able to return data stored in a variable', () => {
    return request(app).get('/get?key=somekey')
    .expect(200)
    .then((res) => {
      expect(res.text).toBe('key: foo');
    });
  });
});
