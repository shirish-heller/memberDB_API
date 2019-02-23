const functions = require('firebase-functions');
const db = require('./db');
const express = require('express');
const pageSize = 5;

// setup express app
const app = express();

// get all members

app.get('/getMembers', (req, res)=> {

    let lastIndex = parseInt(req.query.lastIndex) + 1;
    let result = {
        success: 'true',
        message: 'members received from api endpoint',
        data: db.members.slice(lastIndex, lastIndex+pageSize)
    }
    res.status(200);
    res.send(result);
});

//cached data

app.get('/getMembers-cached', (req, res)=> {

    let lastIndex = parseInt(req.query.lastIndex) + 1;
    let result = {
        success: 'true',
        message: 'members received from api endpoint',
        data: db.members.slice(lastIndex, lastIndex+pageSize)
    }
    res.set('Cache-Control', 'public max-age=300 s-maxage=600');
    res.status(200);
    res.send(result);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app)
