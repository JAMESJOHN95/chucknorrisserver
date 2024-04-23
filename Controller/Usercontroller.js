const users = require('../Models/usermodel')

// user

exports.register = async (req, res) => {
    console.log("inside register function");
    const {name} = req.body
    console.log(name );

    try {
        const newuser = new users({
            name
        })
        await newuser.save()
        res.status(200).json(newuser)

    } catch (err) {
        res.status(401).json(err)
    }
}

exports.getuserdetails = async (req, res) => {
    try {
        const user = await users.find()
        res.status(200).json(user)

    } catch (err) {
        res.status(401).json(err)
    }
}