require ('dotenv').config()
const express = require ('express')
const cors = require ('cors')
require ('./DB/connection')
const router = require('./Router/Router')

// create express

const examserver = express()

 // use cors - to connect two ports

 examserver.use(cors())
 examserver.use(express.json()) 
 examserver.use(router)
 // setup port

 const PORT = 3000 || process.env.PORT

 examserver.listen(PORT,()=>{
    console.log(`Server started at port ${PORT} `);
 })

 examserver.get("/",(req,res)=>{
   res.status(200).send(`<h1 style="color:green">Registeration started and waiting for client request !!!</h1>`)
})