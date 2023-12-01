const router = require("express").Router()

const verifyToken = require("../middlewares/verifyToken");
const Trip = require('../models/Trip.model')

router.get("/getAllTrips", (req, res) => {

    Trip
        .find()
        .sort({ origin: 1 })
        .select({
            origin: 1,
            destination: 1,
            date: 1,
            time: 1,
            price: 1,
            availableSeats: 1,
            owner: 1
        })
        .then(response => res.json(response))
        .catch(err => next(err));
});


router.get("/:id", (req, res, next) => {

    const { id } = req.params

    Trip
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete("/:id", (req, res, next) => {
    const { id } = req.params

    Trip
        .deleteOne({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

router.put("/:id", (req, res, next) => {

    const { id } = req.params
    const update = req.body

    Trip
        .updateOne({ _id: id }, { $set: update })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})


router.post("/saveTrip", verifyToken, (req, res, next) => {

    const { origin, destination, date, time, availableSeats, price } = req.body
    const { _id: owner } = req.payload

    Trip
        .create({ origin, destination, date, time, availableSeats, price, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router