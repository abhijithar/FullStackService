const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_Id: {type: String},
    project: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    priority: {type: Number},    
    manager_Id: {type: String},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = { Project }