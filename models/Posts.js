const mongoose = require('mongoose')

const Posts = new mongoose.Schema({
    
    title : String,
    description : String,
    adresse : String,
    remunieration : String,
    duration : String,
    dateJob : Date,
    domain : String,
    dateOffre : Date,
    referenceOffre : String,

    applications : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',required:true
    },
}) 

module.exports = mongoose.model('Post',Posts)