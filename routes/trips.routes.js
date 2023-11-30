const router = require("express").Router()

const Trip = require('../models/Trip.model')

router.get("/trips/getAllTrips", (req, res) => {
    console.log("Reached getAllTrips route")
    Trip
        .find()
        .sort({ origin: 1 })
        .select({
            origin: 1,
            destination: 1,
            date: 1,
            time: 1,
            price: 1,
            availableSeats: 1


        })
        .then(response => res.json(response))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


router.get("/trips/:id", (req, res, next) => {

    const { id } = req.params

    Trip
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete("/trips/:id", (req, res, next) => {
    const { id } = req.params
    console.log("hola: " + id)

    Trip
        .deleteOne({ _id: id })
        .then(() => res.sendStatus(204))
})

router.put("/trips/:id", (req, res, next) => {

    const { id } = req.params
    const update = req.body

    Trip
        .updateOne({ _id: id }, { $set: update })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})


router.post("/trips/saveTrip", (req, res, next) => {

    const { origin, destination, date, time, availableSeats, price } = req.body

    Trip
        .create({ origin, destination, date, time, availableSeats, price })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router




