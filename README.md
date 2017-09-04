Database Server (tech test practice)
===================
A lightweight server

## Install
* git clone git@github.com:langphil/wooden-door.git
* cd wooden-door
* npm install --save-dev babel-cli babel-preset-env jest supertest superagent express

## Run server
* node server.js

## Terminal
* curl -X GET 'http://localhost:4000/set?somekey=phil'
* curl -X GET 'http://localhost:4000/get'
* curl -X GET 'http://localhost:4000/get?key=somekey'

## Tests
* npm test

## Dependencies
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Jest](https://facebook.github.io/jest/)
* [Supertest](https://github.com/visionmedia/supertest)

## Test specification
You receive a message from a prospective employer:

"Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

Create a new git repository and write code to fulfill the brief to the best of your ability. We will be looking for clean, well tested code in your choice of technology. In addition, the last sentence of the brief implies that you should consider how the code could easily be extended to add an as-yet-unknown data store.

If you still have time at the end of the day, you can extend the code by adding a data store of your choice.
