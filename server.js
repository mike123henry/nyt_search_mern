"use strict";

//setup experss server
const express = require('express');
let app = express();
app.set('port', (process.env.PORT || 3001));







//start server
app.listen(app.get('port'),function(){
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

