var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var userRepo = require('./repos/user-repo')
var projectRepo = require('./repos/project-repo')

var app = express()
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Service up and running');
})

app.get('/users', (req, res) => {
    userRepo.getUsers((err, users) => {
        if (err) throw error;
        res.json(users);
    })
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

app.get('/projects', (req, res) => {
    projectRepo.getProjects((err, projects) => {
        if (err) throw error;
        res.json(projects);
    })
})

app.post('/projects', (req, res) => {

    var project = req.body;
    projectRepo.addProject(project);
    res.status(201).json({ message: 'Project added successfully' });

})

app.listen(5100);