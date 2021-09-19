const { response } = require('express');
const express = require('express');
const mongoose= require('mongoose');
const passport = require('passport');
const router = express.Router();
//Load Person Model
const Person = require('../../models/Person');
//load Profile Model
const Profile = require('../../models/Profile');
//@type GET
//@route /api/profile
//@desc route for user profile
//@access PRIVATE
router.get('/',passport.authenticate('jwt',{session:false}),(request,response)=>{
    Profile.findOne({user:request.user.id})
        .then(profile =>{
            if(!profile){
                return response.status(404).json({'profileNotFound':'No profile found 404 error'})
            }
            response.json(profile);
        })
        .catch(error => console.log(error))
});
//@type POST
//@route /api/profile
//@desc route for updating and saving personal user profile
//@access PRIVATE
router.post('/',passport.authenticate('jwt',{session:false}),(request,response)=>{
    const profileValues = {};
    profileValues.user = request.user.id ;
    if(request.body.username) profileValues.username = request.body.username ;
    if(request.body.website) profileValues.website = request.body.website ;
    if(request.body.country) profileValues.country = request.body.country ;
    if(request.body.protfolio) profileValues.protfolio = request.body.protfolio ;
    if(typeof request.body.languagesProgramming !== 'undefined'){
        profileValues.languagesProgramming = request.body.languagesProgramming.split(',');
    }
    //get social links
    profileValues.social = {};
    if(request.body.youtube)profileValues.social.youtube = request.body.youtube ;
    if(request.body.facebook)profileValues.social.facebook = request.body.facebook ;
    if(request.body.instagram)profileValues.social.instagram = request.body.instagram ;

    //Do dataBase Stuff
    Profile.findOne({user:request.user.id})
    .then(profile =>{
        if(profile){
            Profile.findOneAndUpdate(
                {user : request.user.id},
                {$set : profileValues},
                {new:true}, 
                
            ).then(profile => response.json(profile))
            .catch( error => console.log('problem in update'))
        }
        else{
            Profile.findOne({username:profileValues.username})
            .then(profile =>{
                //username already exists
                if(profile){
                    response.status(400).json({username:'username already exists'})
                }
                //save user
                new Profile(profileValues).save()
                .then(profile => response.json(profile))
                .catch(error=>console.log(error))
            })
            .catch(error => console.log(error))
        }
    })
    .catch(error => console.log('Problem in fatching profile' + error))
});
//@type GET
//@route /api/profile/:username
//@desc route for getting user profile based on USERNAME
//@access PUBLIC
router.get('/:username',(request,response)=>{
    Profile.findOne({username:request.params.username})
    .populate('user',['name','profilePic'])
    .then(profile =>{
        if(!profile){
            response.status(404).json({usernotfound:'user not found'})
        }
        else{
            response.json(profile)
        }
    })
    .catch(error=>console.log(error))
});
//@type GET
//@route /api/profile/:id
//@desc route for getting user profile based on _id
//@access PUBLIC
//having bugs
router.get('/test/:id',(request,response)=>{
    Person.findById({_id:request.params.id})
    .populate('user',['name','profilePic'])
    .then(profile =>{
        if(!profile){
            response.status(404).json({profileNotFound:'profileNot found '})
        }else{
            response.json(profile)
        }
    })
    .catch(error => console.log(error)) 
});
//@type GET
//@route /api/profile/find/everyOne
//@desc route for getting user profile of EVERYONE          
//@access PUBLIC
router.get('/find/everyone',(request,response)=>{
    Profile.find()
    .populate('user',['name','profilePic'])
    .then(profiles =>{
        if(!profiles){
            response.status(404).json({usernotfound:'profile not found'})
        }
        else{
            response.json(profiles)
        }
    })
    .catch(error=>console.log(error))
});
//@type DELETE
//@route /api/profile/
//@desc route for deleting user based on ID          
//@access PRIVATE
router.delete('/',passport.authenticate('jwt',{session:false}),(request,response)=>{
    Profile.findOne({user:request.user.id})
    Profile.findOneAndRemove({user:request.user.id})
    .then(()=>{
        Person.findOneAndRemove({_id: request.user.id})
        .then(()=>{
            response.json({success:"delete was a success"})
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))

});
//@type POST
//@route /api/profile/mywork
//@desc route for adding work profile of a person        
//@access PRIVATE
router.post('/workrole',passport.authenticate('jwt',{session:false}),(request,response)=>{
    Profile.findOne({user:request.user.id})
    .then(profile=>{
        //assignment
        if(!profile){
            response.status(404).json({profileNotFound:'profile not found 404 error'})
        }
        const newWork = {
            role:request.body.id,
            company:request.body.company,
            country:request.body.country,
            from:request.body.from,
            to:request.body.to,
            current:request.body.current,
            details:request.body.details
        };
        profile.workrole.push(newWork);
        profile.save()
        .then(profile=> response.json(profile))
        .catch(error => console.log(error)) 
    })
    .catch(error => console.log(error))
});
//@type  DELETE
//@route /api/profile/workrole/:w_id
//@desc route for deleting specific workrole      
//@access PRIVATE
router.delete('/workrole/:w_id',passport.authenticate('jwt',{session:false}),(request,response)=>{
    Profile.findOne({user:request.user.id})
    .then(profile =>{
        if(!profile){
            response.status(404).json({ProfileNotFound:'Profile not found'});
        }
        const removethis = profile.workrole
        .map(item => item.id)
        .indexOf(request.params.w_id)
        profile.workrole.splice(removethis,1);
        profile.save()
        .then(profile => response.json(profile))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
});
module.exports = router ;