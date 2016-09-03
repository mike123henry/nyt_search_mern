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
var Articles = require('./models/articles.js');

//setup MongoDB Config
var uri = process.env.MONGODB_URI || 'mongodb://localhost/nytmern';
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

//setup body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extend: true}));

//Main route, redirect to the react portion of the app (because of the bundle.js file)
app.get('/', (request, response) =>{
    response.sendFile('./public/index.html');
});

app.get('/api/', function(req, res) {

  // This GET request will search for the latest clickCount
  Articles.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/', function(req, res){
    console.log(req.body)
  var newArticles = new Articles(req.body);


  // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
  newArticles.save(function(err){

    if(err){
      console.log(err);
    }

    else{
        res.send("Updated Click Count!");
    }
  });

});
//start server
app.listen(app.get('port'),() => {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

