
const User = require("../models/User.model")


const signUp = (req, res, next) => {

    const { email, password, username, carModel, carColor } = req.body
    User.create({ email, password, username, carModel, carColor })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

}

const logIn = (req, res, next) => {

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
                return
            }
            if (foundUser.validatePassword(password)) {
                const authToken = foundUser.signToken()
                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ message: "Incorrect password" });
            }
        })

        .catch(err => next(err));
}

const getVerify = (req, res, next) => {
    const loggedUser = req.payload;
    res.json({ loggedUser });
}

module.exports = {
    getVerify, signUp, logIn
}