const router = require("express").Router()
const bcrypt = require('bcryptjs')

const User = require("../models/User.model")

const saltRounds = 10
router.post('/signup', (req, res, next) => {

    const { email, password, username, carModel, carColor } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }


    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username, carModel, carColor })
        })

})


module.exports = router