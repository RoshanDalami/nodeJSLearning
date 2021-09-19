const express = require('express');
const ejs = require('ejs');
const Stategy = require('passport-facebook').Strategy;
const passport = require('passport');
const { response } = require('express');
const port = process.env.port || 3000
passport.use(new Stategy(
    {
 clientID : '503805030709101',
 clientSecret : 'bdce701b8999fbf6885de7adc0321e98',
 callbackURL : 'https://localhost:3000/login/facebook/return',
},
function(accessToken,refreshToken,profile,cb){
    return cb(null,profile);
}
)
);
passport.serializeUser(function(user,cb){
    cb(null, user);
});
passport.deserializeUser(function(user,cb){
    cb(null, user);
});

//create express
const app = express();
//set view
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//middleware
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended:true}));
app.use(require('express-session')({secret :'lco app',resave: true, saveUninitialized:true}));

//@route  -  GET  /home 
//@desc  -  a route to home page
//@access - PUBLIC 
app.get('/home',(request,response)=>{
    response.render('home',{
        user: request.user,
    });
});
//@route  -  GET  /login
//@desc  -  a route to login page
//@access - PUBLIC 
app.get('/login',(request,response)=>{
    response.render('login');
});

//@route  -  GET  /login/facebook
//@desc  -  a route to facebook auth
//@access - PUBLIC 
app.get('/login/facebook',
  passport.authenticate('facebook'));

//@route  -  GET  /login/facebook/callback
//@desc  -  a route to facebook auth
//@access - PUBLIC
app.get('/login/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(request, response) {
    // Successful authentication, redirect home.
    res.redirect('/');
});


//@route  -  GET  /profile
//@desc  -  a route to profile page
//@access - private
app.get('/profile',require('connect-ensure-login').ensureLoggedIn(),(request,response)=>{
    response.render('profile',{
        user: request.user
    });
});


app.listen(3000,()=>{
    console.log('server is running....')
})