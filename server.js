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
app.use(bodyParser.urlencoded({extended: true}));

//Main route, redirect to the react portion of the app (because of the bundle.js file)
app.get('/', (request, response) =>{
    response.sendFile('./public/index.html');
});

app.get('/api/all/json', function(req, res) {

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

app.get('/api/getSaved', function(req, res) {
  console.log("server.js /api/getSaved has run  ")
  // This GET request will search for the latest clickCount
  Articles.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        console.log("/api/getSaved doc = ");
        console.log(doc);
        res.send(doc);
      }
    })
});
app.post('/api', function(req, res){
  // console.log("*****************************************start post /api/");
  // console.log("*****title = "+req.body.title);
  // console.log("*****url = "+req.body.url);
  // console.log("**************************************end body");
  // console.log("*************************************end post /api/");
  var newArticles = new Articles({title: req.body.title, url: req.body.url, saved: true});
  newArticles.save().then(function(err, response){
    console.log("running from serverjs")
    res.json(response);
  })
  //   //this function does nothing WHY??>?
  //   function(err){
  //   if(err){
  //     console.log("inside .save err");
  //     console.log(err);
  //   }
  //   else{
  //       res.send("Updated Click Count!");
  //   }
  // }

});
//start server
app.listen(app.get('port'),() => {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

