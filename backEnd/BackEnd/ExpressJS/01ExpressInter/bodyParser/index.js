const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = '5000'
app.use(bodyParser.urlencoded({extended:false}));
app.use('/login',express.static(__dirname + '/public')); //serving static file
app.get('/',(request,response)=>{
    response.send('hello , my application');
});
app.post('/login',(request,response)=>{
    console.log(request.body.email);//name of the input
    response.redirect('/') //redirect to home page
});
app.listen(port,()=>{
    console.log('server is running at ' + port); //listing to the port
});