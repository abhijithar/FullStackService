const mongoose = require('mongoose');
const userModel = require('../models/user');

// Connect to the Database
mongoose.connect('mongodb://localhost:27017/projectManager')

function connectDb(callback) {

    // Connect to the server
    mongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db);
    })

}

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
            console.log('User added successfully');
        });

}

function deleteUser(id, callback) {

    userModel.User.findOneAndRemove({ _id: id }) 
    .exec(function(err, user) {
        if (err) {
            callback(true, {msg: 'Cannot remove user'} )
        }       
        if (!user) {
            callback(true,  {msg: 'User not found'})
        }  
        callback(false, {msg: 'User deleted.'});
    });

}

module.exports = { getUsers, addUser, deleteUser }
