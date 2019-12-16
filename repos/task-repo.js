const mongoose = require('mongoose');
const taskModel = require('../models/task');

// Connect to the Database
mongoose.connect('mongodb://localhost:27017/projectManager')

function getTasks(callback) {

    taskModel.Task.find({}, (err, res) => {

        if (err) callback(err, null);
        callback(null, res);

    });

}
 
function addTask(task) {

    const taskObj = new taskModel.Task(task);
    taskObj.save()
        .then(() => {
        });

}

function updateTask(task, callback) {

    taskModel.Task.findOneAndUpdate(
        // Query
        { task_Id: task.task_Id },  
        { $set: {project_Id: task.project_Id, task: task.task, parentTask: task.parentTask, priority: task.priority, startDate: task.startDate, endDate: task.endDate, user_Id: task.user_Id, parentTask_Id: task.parentTask_Id, status: task.status } },
        { new: true }
    )
        .exec(function (err, task) {
            if (err) {
                callback(true, { msg: 'Cannot update task' })
            }
            if (!task) {
                callback(true, { msg: 'Task not found' })
            }
            callback(false, { msg: 'Task updated.' });
        });

}


module.exports = { getTasks, addTask, updateTask }
