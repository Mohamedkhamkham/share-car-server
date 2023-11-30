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


router.get("/getOneTrips/:trips_id", (req, res, next) => {

    const { trips_id } = req.params

    Coaster
        .findById(trips_id)
        .then(response => res.json(response))
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




