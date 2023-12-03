const router = require("express").Router()

const verifyToken = require("../middlewares/verifyToken");
const Reservado = require('../models/Reservado.model')
const Trip = require('../models/Trip.model')

router.get("/:id", verifyToken, (req, res) => {
    const { id } = req.params
    console.log(id)
    Reservado
        .find({ user_id: id })
        .populate('trips')
        .exec()
        .then(response =>
            res.json(response)
        )
        .catch(err => next(err));
});


router.post("/", verifyToken, (req, res, next) => {

    const { user_id } = req.body
    const { trip_id } = req.body

    let userReservafind = null;

    Reservado
        .findOne({ user_id: user_id })
        .then(data => {
            userReservafind = data;

            if (userReservafind != null) {
                if (userReservafind.trips.includes(trip_id)) {
                    Reservado
                        .updateOne({ user_id, $pull: { trips: trip_id } })
                        .then(response => res.json(response))
                        .catch(err => next(err))
                } else {
                    Reservado
                        .updateOne({ user_id, $push: { trips: trip_id } })
                        .then(response => res.json(response))
                        .catch(err => next(err))
                }

            } else {
                console.log("CREAR")
                const document = {
                    "user_id": user_id,
                    "trips": [trip_id]
                }
                Reservado
                    .create(document)
                    .then(response => res.json(response))
                    .catch(err => next(err))
            }
        })
        .catch(err => {
            console.error('Error en la consulta:', err);
        });


})



module.exports = router