const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const Reservado = require('../models/Reservado.model');
const Trip = require('../models/Trip.model');

router.get("/:id", verifyToken, async (req, res, next) => {
    try {
        const { id } = req.params;
        const userReservations = await Reservado.findOne({ user_id: id }).populate('trips').exec();
        res.json(userReservations);
    } catch (err) {
        next(err);
    }
});

router.post("/", verifyToken, async (req, res, next) => {
    try {
        const { user_id, trip_id } = req.body;
        const userReservations = await Reservado.findOne({ user_id });

        if (userReservations) {
            if (userReservations.trips.includes(trip_id)) {
                await Reservado.updateOne({ user_id, $pull: { trips: trip_id } });
            } else {
                await Reservado.updateOne({ user_id, $push: { trips: trip_id } });
            }
            res.json(userReservations);
        } else {
            await Reservado.create({ user_id, trips: [trip_id] });
            res.json(userReservations);
        }
    } catch (err) {
        console.error('Error:', err);
        next(err);
    }
});

module.exports = router;
