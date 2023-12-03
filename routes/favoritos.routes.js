const router = require("express").Router()

const verifyToken = require("../middlewares/verifyToken");
const Favorito = require('../models/Favorito.model')

router.get("/:id", verifyToken, (req, res) => {
    const { id } = req.params
    console.log(id)
    Favorito
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

    Favorito
        .findOne({ user_id: user_id })
        .then(data => {
            if (data != null) {
                if (data.trips.includes(trip_id)) {
                    Favorito
                        .updateOne({ user_id, $pull: { trips: trip_id } })
                        .then(() => res.sendStatus(204))
                        .catch(err => next(err))
                } else {
                    Favorito
                        .updateOne({ user_id, $push: { trips: trip_id } })
                        .then(() => res.sendStatus(204))
                        .catch(err => next(err))
                }
            } else {
                const document = {
                    "user_id": user_id,
                    "trips": [trip_id]
                }

                Favorito
                    .create(document)
                    .then(() => res.sendStatus(204))
                    .catch(err => next(err))
            }
        })
        .catch(err => {
            console.error('Error en la consulta:', err);
        });


})

module.exports = router