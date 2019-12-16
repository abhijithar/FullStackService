const mongoose = require('mongoose');
const userModel = require('../models/user');
const counterModel = require('../models/counter');
const counterRepo = require('../repos/counter-repo');

// Connect to the Database
mongoose.connect('mongodb://localhost:27017/projectManager')

function getUsers(callback) {

    userModel.User.find({}, (err, res) => {

        if (err) callback(err, null);
        callback(null, res);

    });

}

function addUser(user) {

    const userObj = new userModel.User(user);
    userObj.save()
        .then(() => {
        });

}

function updateUser(user, callback) {

    userModel.User.findOneAndUpdate(
        // Query
        { user_Id: user.user_Id },  
        { $set: {firstName: user.firstName, lastName: user.lastName, employee_Id: user.employee_Id } },
        { new: true }
    )
        .exec(function (err, user) {
            if (err) {
                callback(true, { msg: 'Cannot update user' })
            }
            if (!user) {
                callback(true, { msg: 'User not found' })
            }
            callback(false, { msg: 'User updated.' });
        });

}

function deleteUser(id, callback) {

    userModel.User.findOneAndRemove({ _id: id })
        .exec(function (err, user) {
            if (err) {
                callback(true, { msg: 'Cannot remove user' })
            }
            if (!user) {
                callback(true, { msg: 'User not found' })
            }
            callback(false, { msg: 'User deleted.' });
        });

}

module.exports = { getUsers, addUser, deleteUser, updateUser }
