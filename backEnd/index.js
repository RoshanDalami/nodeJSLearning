const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose')
app.use(express.urlencoded({extended : false}))
app.use(express.json())
//requireing model
const Person = require("./model/Person")
//getting routers
const api = require('./routes/api')

//connecting to the database
const db = require('./setup/keys').mongoURL
mongoose.connect(db)
.then(()=>{
    console.log('DataBase connected successfully')
})
.catch((error)=>{console.log(error)})
//using routes
app.use('/',api)
//view engin
app.set('view-engine','ejs')
app.get('/',(request,response)=>{
    response.json({test:"success"})
});
app.get('/register',(request,response)=>{
    response.render('register.ejs')
})

app.listen(PORT,()=>{
    console.log('server is running at ' 
    + PORT)
})