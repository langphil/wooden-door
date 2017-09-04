const express = require('express')
const app = express()

someKey = {};

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/set', (req, res) => {
  res.status(200).send();
  someKey = req.query.somekey
  console.log(someKey);
});

app.get('/get', (req, res) => {
  res.status(200).send();
});

module.exports = app
