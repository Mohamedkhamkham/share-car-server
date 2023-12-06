const router = require("express").Router()

const { signUp, logIn, getVerify } = require("../controllers/Auth.controllers")
const verifyToken = require("../middlewares/verifyToken")
// const User = require("../models/User.model")


router.post('/signup', signUp)

router.post('/login', logIn)

router.get('/verify', verifyToken, getVerify)

module.exports = router