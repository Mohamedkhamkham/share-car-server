
const User = require("../models/User.model");

const getUser = (req, res) => {

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
};

const gettUserById = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteUserById = (req, res, next) => {
    const { id } = req.params

    User
        .deleteOne({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

const updateUserById = (req, res, next) => {

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
}

module.exports = {
    getUser, gettUserById, updateUserById, deleteUserById
}