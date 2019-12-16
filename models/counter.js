const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema({
    type: {type: String},
    prefix: {type: String},
    sequenceVal: {type: Number}
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = { Counter }