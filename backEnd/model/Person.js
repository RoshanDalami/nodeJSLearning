const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

let newPerson = new Schema (
    {
        name :{
            type : String,
            require: true
        },
        email:{
            type: String,
            require : true,
        },
        password : {
            type : String ,
            require : true

        }
    }
)
module.exports = person = mongoose.model('newperson',newPerson)