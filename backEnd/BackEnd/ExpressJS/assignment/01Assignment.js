const express = require('express');

const app = express();
const port = '3000'

const path = require('path');
app.get('/contact us',(request,response)=>{
response.send('<h1>hello World</h1>');

});
app.get('/services',(request,response)=>{
    response.send('<ul><h2>Our Services</h2><li>Web Services</li><li>Logo Design</li><li>Video Creation</li></ul>');
})
app.listen(port , ()=>{
    console.log('server is running at port 3000')
})