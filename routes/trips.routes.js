const router = require("express").Router()

const Trip = require('../models/Trip.model')

router.get("/getAllTrips", (req, res) => {
    console.log("Reached getAllTrips route")
    Trip
        .find()
        .sort({ destination: 1 })
        .select({ destination: 1, price: 1 })
        .then(response => res.json(response))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


router.post("/trips/saveTrip", (req, res, next) => {

    const { origin, destination, date, time, availableSeats, price } = req.body

    Trip
        .create({ origin, destination, date, time, availableSeats, price })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router




