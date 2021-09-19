'use strict';
const express = require('express');
const bodyParser = require('body-parser'); //body-parser is optional
const port = '5000';
const app = express();
const path = require('path');

app.set('views',path.join(__dirname , 'views')); // setting dir name
app.set('view engine','pug');//setting view engine pug is the engine name 
app.get('/',(request,response)=>{
   // response.send('Hello this server is running properly');
   response.render('index')
});

app.listen(port,()=>{
    console.log(`server is running at ${port}....`)
})