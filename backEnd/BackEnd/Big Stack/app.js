const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose'); // cannot connect mongoose like that because we setup url is in different file so we need to configure
const passport = require('passport')
const app = express();
const port = process.env.port || 5000
//middleware for body parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//bring all routes
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const questions = require('./routes/api/questions');
//mongoDB configuration
const db = require('./setup/myURL').mongoURL; //grabing the myURL from setup folder and accessing value 'mongoURL' 
//attempt to connect to database
mongoose //this is mongoose.connect().then().catch()
    .connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }) //db is const
    .then(()=>{  //if no error . donot use semicolon in between these
        console.log('MongoDB connect succesfully')
    })
    .catch((error)=>{
        console.log(error) //if any error found.
    })

//Passport Middleware
app.use(passport.initialize());
//config for JWT strategy
require('./strategies/jsonWTStartagie')(passport);
//for testing only
app.get('/',(request,response)=>{
    // response.send('Hey there haha');
});
//acutal routes
app.use('/api/auth',auth);
app.use('/api/profile',profile);
app.use('/api/questions',questions);

app.listen(port , ()=>{
    console.log('Server is running well at' + port);
});