

const bcrypt = require('bcryptjs')


const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken")

const jwt = require('jsonwebtoken');


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
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

})


router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username } = foundUser;
                const payload = { _id, email, username }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.json({ authToken })

            }
            else {
                res.status(401).json({ message: "Incorrect password" });
            }

        })
        .catch(err => next(err));
})




router.get('/verify', verifyToken, (req, res, next) => {
    const loggedUser = req.payload;
    res.json({ loggedUser });
})






module.exports = router