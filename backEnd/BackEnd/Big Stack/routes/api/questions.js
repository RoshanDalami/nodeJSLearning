const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
//load Person Model
const Person = require('../../models/Person');
//load Profile Model
const Profile = require('../../models/Profile');
//load Question Model
const Question = require('../../models/Question')

//@type  GET
//@route /api/questions
//@desc route questions     
//@access PUBLIC
router.get('/',(request,response)=>{
    Question.find()
    .sort({date:'desc'})
    .then(questions => response.json(questions))
    .catch(error => console.log(error))
});
//@type  GET
//@route /api/questions
//@desc route for submitting questions  
//@access PRIVATE
router.post('/',passport.authenticate('jwt',{session:false}),(request,response)=>{
    const newQuestion = new Question({
        textone:request.body.textone,
        texttwo:request.body.texttwo,
        user:request.body.id,
        name:request.body.name,
    });
    newQuestion.save()
    .then(question => {
        response.json(question)
    })
    .catch(error => console.log(error + " unable to post question"))
});
//@type  POST
//@route /api/answers/:id
//@desc route for submitting answer to questions
//@access PRIVATE
router.post('/answer/:id',passport.authenticate('jwt',{session:false}),(request,response)=>{
Question.findById(request.params.id)
.then(question => {
    const newAnswer = {
        user:request.user.id,
        name:request.body.name,
        text:request.body.text, //text is actually answer
    };
    question.answer.unshift(newAnswer);
    question.save()
    .then(question => response.json(question))
    .catch(error => console.log(error))
})
.catch(error => console.log(error))
});
//@type  POST
//@route /api/questions/upvote/:id
//@desc route for upvoting 
//@access PRIVATE
router.post('/upvote/:id',passport.authenticate('jwt',{session:false}),(request,response)=>{
    Profile.findOne({user:request.user.id})
    .then(profile=>{
        Question.findById(request.params.id)
        .then(question =>{
            if(question.upvotes.filter(upvote => upvote.user.toString()===request.user.id.toString()).length >0){
                return response.status(400).json({noupVote:'user already upvoted'})
            }
            else{
                question.upvotes.unshift({user:request.user.id})
                question.save()
                .then(question => {
                    response.json(question)
                })
                .catch(error => console.log(error))
            }
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
});
module.exports = router ;