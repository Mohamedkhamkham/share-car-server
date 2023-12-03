const router = require("express").Router()

const verifyToken = require("../middlewares/verifyToken");
const User = require("../models/User.model");

router.get("/", verifyToken, (req, res) => {

    User
        .find()
        .sort({ username: 1 })
        .select({
            email: 1,
            username: 1,
            carmodel: 1,
            carcolor: 1
        })
        .then(response => res.json(response))
        .catch(err => next(err));
});


router.get("/:id", verifyToken, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete("/:id", verifyToken, (req, res, next) => {
    const { id } = req.params

    User
        .deleteOne({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

router.put("/:id", verifyToken, (req, res, next) => {

    const { id } = req.params
    const update = req.body

    const { _id: owner } = req.payload
    if (id == owner) {
        User
            .updateOne({ _id: id }, { $set: update })
            .then(() => res.sendStatus(204))
            .catch(err => next(err))
    } else {
        res.sendStatus(403)
    }
})

module.exports = router