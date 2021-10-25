const mongoose = require('mongoose')

const Application = new mongoose.Schema({
    dateApp : Date,
    referenceApp : String,
    statutApp : String,
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',required:true
    }

})

module.exports = mongoose.model('Application',Application)