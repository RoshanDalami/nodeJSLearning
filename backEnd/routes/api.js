const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
//requiring model
const Person = require('../model/Person')

router.post('/register',(request,response)=>{
   
    Person.findOne({email : request.body.email})
    .then((Person)=>{
        if(Person){
            response.json({Email: 'Email already register'})
        }
        else{
            const newPerson = new person({
                email :request.body.email,
                name : request.body.name,
                password: request.body.password
            })
            bcrypt.genSalt(10,(erro,salt)=>{
                bcrypt.hash(newPerson.password,salt,(error,hash)=>{
                    if(error) throw error
                    newPerson.password = hash ;
                    newPerson.save()
                    .then(()=>response.redirect('/'))
                    .catch((error)=>console.log(error))
                })
            })
            
            
        }
    })
    .catch((error)=>console.log(error))
       
})

module.exports = router