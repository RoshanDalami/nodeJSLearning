const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const PersonSchema = new Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required: true ,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    username: {
        type:String,
    },
    profilePic:{
        type : String,
        default:''//url of picture
    },
    date:{
        type:Date,
        default : Date.now ,
    },
});

module.exports = person = mongoose.model('myPerson',PersonSchema);