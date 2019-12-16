const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task_Id: {type: String},
    project_Id: {type: String},
    task: {type: String},
    parentTask: {type: Boolean},
    priority: {type: Number},
    parentTask_Id: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    user_Id: {type: String},
    status: {type: String}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task }