const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_Id: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    employee_Id: {type: String},
    project_Id: {type: String},
    task_Id: {type: String}
});

const User = mongoose.model('User', userSchema);

module.exports = { User }