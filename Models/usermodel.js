const mongoose = require('mongoose')

const registerschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
})

const users = mongoose.model("users",registerschema)
module.exports = users