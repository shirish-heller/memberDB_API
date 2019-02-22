// import express from 'express';
// import db from './src/db';

const express = require('express');
const db = require('./src/db');
const pageSize = 5;

// setup express app
const app = express();

// get all members

app.get('/api/v1/getMembers', function (req, res) {

    var lastIndex = parseInt(req.query.lastIndex) + 1;
    var result = {
        success: 'true',
        message: 'members received from api endpoint',
        data: db.members.slice(lastIndex, lastIndex+pageSize)
    }
    res.status(200);
    res.send(result)
});

const PORT = 5500;
app.listen(PORT, function () {
    console.log(`server running on ${PORT}`)
});