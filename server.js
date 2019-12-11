var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var userRepo = require('./repos/user-repo')

var app = express()
app.use(bodyParser.json());
app.use(cors());

app.get('/users', (req, res) => {
    userRepo.getUsers((err, users) => {
        if (err) throw error;
        res.json(users);
    })
})

app.get('/', (req, res) => {
    console.log('Service up and running');
})

app.post('/users', (req, res) => {

    var user = req.body;
    console.log(user);
    userRepo.addUser(user);
    res.status(201).json({ message: 'User added successfully' });

})

app.delete('/users/:id', (req, res) => {

    console.log(req.params.id);
    var id = req.params.id;
    userRepo.deleteUser(id, (err, data) => {
        if (err) throw err;
        res.status(202).json(data);
    })

})

app.listen(5100);