const mongoose = require('mongoose');
const projectModel = require('../models/project');

// Connect to the Database
mongoose.connect('mongodb://localhost:27017/projectManager')

function getProjects(callback) {

    projectModel.Project.find({}, (err, res) => {

        if (err) callback(err, null);
        callback(null, res);

    });

}

function addProject(project) {

    const projectObj = new projectModel.Project(project);
    projectObj.save()
        .then(() => {
            console.log('Project added successfully');
        });

}

module.exports = { getProjects, addProject }
