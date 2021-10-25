const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name : String,
    email : {type : String, require : true, unique : true},
    password : {type : String},
    description : String,
    role : String,
    pic:String,
    phone : String,
    profession  :String,
    adresse : String,
    birth : Date,
   posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    applications : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }]
}) 

module.exports = mongoose.model('User',User)