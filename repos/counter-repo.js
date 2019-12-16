const mongoose = require('mongoose');
const counterModel = require('../models/counter');

// Connect to the Database
mongoose.connect('mongodb://localhost:27017/projectManager')

function getCounters(callback) {

    counterModel.Counter.find({}, (err, res) => {

        if (err) callback(err, null);
        callback(null, res);

    });

}

function addCounter(counter) {

    const counterObj = new counterModel.Counter(counter);
    counterObj.save()
        .then(() => {
        });

}

function getNextId(counter, callback) {

    counterModel.Counter.findOneAndUpdate(
        // Query
        { type: counter.type },
        { $inc: {sequenceVal: 1} },
        { new: true }
    ) 
        .exec(function (err, counter) {
            if (err) {
                callback(true, { msg: 'Cannot update counter' })
            }
            if (!counter) {
                callback(true, { msg: 'Counter not found' })
            }
            callback(false, counter);
        });
}

module.exports = { getCounters, addCounter, getNextId }
