const express = require('express');
const bcrypt = require('bcryptjs');
const jsonwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../Setup/myURL');
const router = express.Router();

router.get('/',(request,response)=>{
    response.json({test:'Auth is being testing'});
});
//Import Schema for Person to Register
const Person = require('../../models/Person');
//@type POST
//@route /api/auth/register
//@desc route for registration 
//@access PUBLIC
router.post('/register',(request,response)=>{
    Person.findOne({email:request.body.email})
        .then( Person =>{
            if(Person){ //checking if the person already have an account or not
                return response.status(400).json({emailerror:'Email is already register '})
            }
            else{//if new account then through a required men in form of object
                const newPerson = new person({
                    name : request.body.name,//name in input
                    email: request.body.email,//email form frontend or input
                    password: request.body.password,//password from form
                })

            //Encrypt Password using bcryptJS
            bcrypt.genSalt(10, (error, salt)=>{
            bcrypt.hash(newPerson.password, salt, (error, hash) => {
        // Store hash in your password DB.
        if(error) throw error ;
        newPerson.password = hash ;
        newPerson.save()
        .then(person => response.json(person))
        .catch(error => console.log(error))
        });
        });

         }
        })
        .catch((error)=>{
            console.log(error)
        })
});

//@type POST
//@route /api/auth/login
//@desc route for login 
//@access PUBLIC
router.post('/login',(request,response)=>{
    const email = request.body.email ;
    const password = request.body.password ;
    Person.findOne({email})
        .then(person => {
            if(!person){ //finding if email is alread on database or not
                return response.status(404).json({email:'user not found with this email'})
            }
            bcrypt.compare(password,person.password) //comparing the password
                .then(isCorrect => {
                    if(isCorrect){
                        //response.json({success : 'login successfully'});
                        //use payload and create token for user
                        const payload ={
                            id: person.id ,
                            name : person.name,
                            email:person.email, 
                        };
                        jsonwt.sign(
                            payload
                          , key.secret,(error,token)=>{
                              response.json({
                                  login: 'success',
                                  token : token ,
                              })
                          });

                    //   jsonwt.sign( 
                    //         payload,
                    //         key.secret,
                    //         {expriesIn: 3600},
                    //         (error,token)=>{
                    //            response.json({
                    //                success: true,
                    //                token : 'bearer '+ token,

                    //            }) 
                    //         }
                    //     )
                    }
                    else{
                        response.status(400).json({passwordError:'password donot match'});
                    }

                })
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
});
//@type GET
//@route /api/auth/profile
//@desc route for user profile
//@access PRIVATE
router.get('/profile',passport.authenticate('jwt',{session:false}),(request,response)=>{
    response.json({
        id:request.user.id,
        name:request.user.name,
        email:request.user.email,

    })
});



module.exports = router;