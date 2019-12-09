var express = require('express');
var app = express()
var bodyParser = require('body-parser');

var userRepo = require('./repos/user-repo')

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    console.log('User List');
})

app.get('/', (req, res) => {
    console.log('User List');
    userRepo.connectDb((db));
})

app.listen(5100);