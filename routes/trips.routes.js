const router = require("express").Router()

const routes = require(".")
const Trip = require('../models/Trip.model')

router.get("/getAllTrips", (req, res) => {

    Trip
        .find()
        .sort({ destination: 1 })
        .select({ destination: 1, price: 1 })
        .then(response => setTimeout(() => res.json(response)))
        .catch(err => next(err))
})


module.exports = routes