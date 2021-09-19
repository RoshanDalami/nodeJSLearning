'use strict';
const express = require('express');
const app = express();
const port = '5000';

var myConsoleLog = function (request,response,next){
console.log('I am MiddleWare');
next();
};

var serverTime = function(request, response, next){
    request.requestTime = Date.now();

    next();
};

app.use(serverTime);

app.get('/',(request,response)=>{
    response.send('Hey, there This is running' + 'and time is ' + request.requestTime);
    console.log('hello wrold from /home');
});



app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});