//import { MongoClient } from 'mongodb';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
//const mongoose = require('./node_modules/mongoose');

const { ErrorResponseObject } = require('./common/http');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use('/', routes);

app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('route not defined')));

const DATABASE_URI = "mongodb+srv://mcurli00:fesb1234@cluster0.cig6cob.mongodb.net/easy-enroll-db"

//const client = new MongoClient(DATABASE_URI);
//mongoose.connect(process.env.DATABASE_URI);
//mongoose.connect(DATABASE_URI);

/*
client.connect((error) => {
    if (error) {
        console.log(`⚡️[DB]: Could not connected to database!`);
        console.log(error)     
    } else {
        console.log(`⚡️[DB]: Connected to database!`);
    }
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to Easy enroll database.');
})

db.on('error', () => {
  console.log('Database connection error.');
});
*/
module.exports = app;