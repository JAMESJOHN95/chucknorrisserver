const mongoose = require('mongoose')

const registerschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    dateofbirth:{
        type:String,
        require:true
    },
    course:{
        type:String,
        require:true
    },
})

const users = mongoose.model("users",registerschema)
module.exports = users