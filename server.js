"use strict";

//setup experss server
const express = require('express');
let app = express();
app.set('port', (process.env.PORT || 3001));


//setup path package
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'public')));

//setup mongoose and morgan
const mongoose = require('mongoose');
const logger = require('morgan');
app.use(logger('dev'));
let Articles = require('./models/articles.js');

//setup MongoDB Config
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/nytmern';
//setup body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extend: true}));

//Main route, redirect to the react portion of the app (because of the bundle.js file)
app.get('/', (request, response) =>{
    response.sendFile('./public/index.html');
});

//start server
app.listen(app.get('port'),() => {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

