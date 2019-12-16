var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Repos used
var userRepo = require('./repos/user-repo');
var projectRepo = require('./repos/project-repo');
var taskRepo = require('./repos/task-repo');
var counterRepo = require('./repos/counter-repo')

var app = express()
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
})

app.get('/users', (req, res) => {

    userRepo.getUsers((err, users) => {
        if (err) throw error;
        res.json(users);
    });

})

app.post('/users', (req, res) => {

    var user = req.body;
    userRepo.addUser(user);
    res.status(201).json({ message: 'User added successfully' });

})

app.put('/users', (req, res) => {

    var user = req.body;
    userRepo.updateUser(user, (err, data) => { 
        if (err) throw err;
        res.status(202).json(data);
    });

})

app.delete('/users/:id', (req, res) => {

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
    });

})

app.post('/projects', (req, res) => {

    var project = req.body;
    projectRepo.addProject(project);
    res.status(201).json({ message: 'Project added successfully' });

})

app.get('/tasks', (req, res) => {

    taskRepo.getTasks((err, tasks) => {
        if (err) throw error;
        res.json(tasks);
    });

})

app.post('/tasks', (req, res) => {

    var task = req.body;
    taskRepo.addTask(task);
    res.status(201).json({ message: 'Task added successfully' });

})

app.put('/tasks', (req, res) => {

    var task = req.body;
    taskRepo.updateTask(task, (err, data) => { 
        if (err) throw err;
        res.status(202).json(data);
    });

})

app.post('/counters', (req, res) => {

    var counter = req.body;
    counterRepo.addCounter(counter);
    res.status(201).json({ message: 'Task added successfully' });

})

app.get('/counters', (req, res) => {
    
    counterRepo.getCounters((err, counters) => {
        if (err) throw error;
        res.json(counters);
    });
    
})

app.put('/counters', (req, res) => {

    var counter = req.body;
    counterRepo.getNextId(counter, (err, data) => {
        if (err) throw err;
        res.status(202).json(data);
    });

})

app.listen(5100);