const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'projectManager';

function connectDb(callback) {

    // Connect to the server
    mongoClient.connect(url, function (err, client) {
        assert.equal(null,err);
        console.log('Connected successfully to the server');

        const db = client.db(dbName);
        callback(db);
    })

}

module.exports = { connectDb }
