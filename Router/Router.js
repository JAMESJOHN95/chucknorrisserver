const express = require('express')
const usercontroller = require('../Controller/Usercontroller')

const router = new express.Router()
//register
router.post('/register',usercontroller.register)
//get all details
router.get('/register',usercontroller.getuserdetails)


module.exports = router