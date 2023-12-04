const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const Favorito = require('../models/Favorito.model');
const Trip = require('../models/Trip.model');

router.get("/:id", verifyToken, async (req, res, next) => {
    try {
        const { id } = req.params;
        const userFavoritos = await Favorito.findOne({ user_id: id }).populate('trips').exec();
        res.json(userFavoritos);
    } catch (err) {
        next(err);
    }
});

router.post("/", verifyToken, async (req, res, next) => {
    try {
        const { user_id, trip_id } = req.body;
        const userFavoritos = await Favorito.findOne({ user_id });

        if (userFavoritos) {
            if (userFavoritos.trips.includes(trip_id)) {

                await Favorito.updateOne({ user_id, $pull: { trips: trip_id } });
            } else {

                await Favorito.updateOne({ user_id, $push: { trips: trip_id } });
            }
            const userFavoritosUpdate = await Favorito.findOne({ user_id });

            res.json(userFavoritosUpdate);
        } else {

            const userFavoritoCreate = await Favorito.create({ user_id, trips: [trip_id] });
            res.json(userFavoritoCreate);
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;