const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{console.log("Mongo db atlas connect with exam server");}
)
    .catch(err=>{
console.log("Connection failed");
console.log(err);
    })