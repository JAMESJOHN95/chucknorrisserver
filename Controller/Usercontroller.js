const users = require('../Models/usermodel')

// register

exports.register = async (req, res) => {
    console.log("inside register function");
    const { name, address, mobile,email,gender,dateofbirth,course } = req.body
    console.log(name, address, mobile,email,gender,dateofbirth,course );

    try {
        const newuser = new users({
            name, address, mobile,email,gender,dateofbirth,course
        })
        await newuser.save()
        res.status(200).json(newuser)

    } catch (err) {
        res.status(401).json(err)
    }
}

exports.getstudentdetails = async (req, res) => {
    try {
        const studentdetails = await users.find()
        res.status(200).json(studentdetails)

    } catch (err) {
        res.status(401).json(err)
    }
}