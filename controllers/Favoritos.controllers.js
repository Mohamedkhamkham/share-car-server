
const Favorito = require('../models/Favorito.model');
// const Trip = require('../models/Trip.model');

const getFavoritoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userFavoritos = await Favorito.findOne({ user_id: id }).populate('trips').exec();
        res.json(userFavoritos);
    } catch (err) {
        next(err);
    }
};


const updateFavoritoById = async (req, res, next) => {
    try {
        const { user_id, trip_id } = req.body;
        const userFavs = await Favorito.findOne({ user_id });

        if (userFavs) {

            const updateQuery = userFavs.trips.includes(trip_id) ? { user_id, $pull: { trips: trip_id } } : { user_id, $push: { trips: trip_id } }
            await Favorito.updateOne(updateQuery)

            const userFavoritosUpdate = await Favorito.findOne({ user_id })
            res.json(userFavoritosUpdate)

        } else {

            const userFavoritoCreate = await Favorito.create({ user_id, trips: [trip_id] });
            res.json(userFavoritoCreate);
        }
    } catch (err) {
        next(err);
    }
}



module.exports = {
    getFavoritoById, updateFavoritoById
}