const { response } = require('express');
const express = require('express'); //init the express
const app = express(); //mindotory
app.get('/',(request,response)=>{
   // response.status(200).json({'name':'roshan','age': '20','freak': false})
    response.status(500).json({'error':'Fucking Learn first'})

})
app.get('/',(request, response)=>{
    response.send('Hey , there');
});
app.get('/about',(request,response)=>{
response.send('I am about section');
});
app.get('/user/:id/status/:status_id',(request,response)=>{
response.send(request.params);
});

app.get('/flights/:from-:to',(request,response)=>{
response.send(request.params)
});

app.post('/login',(request,response)=>{
    response.send('I am Login');
}); 
app.listen(3000,()=>{
    console.log('server is running at 3000');
});

//res.download() to download
// res.end() to end the response  of server
//res.json()
//res.send() to send
//res.render() to render template
//res.redirect() to redirect the user
//res.sendstatus() to send the status 

/*
status Code:
200-OK
403 - Forbidden
404 - file not found
500 - internal error
*/ 

