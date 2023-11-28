const router = require("express").Router()

const Trip = require('../models/Trip.model')

router.get("/getAllTrips", (req, res) => {
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


module.exports = router




