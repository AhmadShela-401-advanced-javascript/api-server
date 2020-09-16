/* eslint-disable no-undef */
'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const mongoose = require('mongoose')

let DATABASE_URL = process.env.DATABASE_URL;
// const PORT = 3030 || process.env.PORT
/**
 * mongooseOptions
 */
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, mongooseOptions);

server.start()