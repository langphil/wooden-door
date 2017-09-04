const express = require('express');
const app = express();

someKey = '';

app.get('/', (req, res) => {
  res.send();
});

app.get('/set', (req, res) => {
  res.send();
  someKey = req.query.somekey;
});

app.get('/get', (req, res) => {
  let route = req.url == '/get?key=somekey' ? 'key: ' + someKey : '';
  res.send(route);
});

module.exports = app;
