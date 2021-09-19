//create a delete route and test it using postman
const express = require('express');

const app = express();
const port = '5000' ;
app.delete('/about',(request,response)=>{
    response.send('Deleted SucessFully');
});
app.listen(port,()=>{
    console.log(`Server is running :${port}`)
});

//Assignment Done