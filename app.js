// import express from 'express';
// import db from './src/db';

const db = require('./src/db');
const express = require('express');
const pageSize = 5;

// setup express app
const app = express();

// get all members

app.get('/api/v1/getMembers', (req, res)=> {

    let lastIndex = parseInt(req.query.lastIndex) + 1;
    let result = {
        success: 'true',
        message: 'members received from api endpoint',
        data: db.members.slice(lastIndex, lastIndex+pageSize)
    }
    res.status(200);
    res.send(result)
});

const PORT = 5500;
app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`);
    console.log('goto http://localhost:5500/api/v1/getMembers?lastIndex=0 to test the API')
});