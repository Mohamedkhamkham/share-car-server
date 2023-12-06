const Trip = require('../models/Trip.model')


const getAllTrips = (req, res) => {

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
            owner: 1,
            image: 1,
            location: 1
        })
        .then(response => res.json(response))
        .catch(err => next(err));
}

const getId = (req, res, next) => {

    const { id } = req.params

    Trip
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteId = (req, res, next) => {
    const { id } = req.params

    Trip
        .deleteOne({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

const putId = (req, res, next) => {

    const { id } = req.params
    const update = req.body
    const { _id: owner } = req.payload

    if (update.owner == owner) {
        Trip
            .updateOne({ _id: id }, { $set: update })
            .then(() => res.sendStatus(204))
            .catch(err => next(err))
    } else {
        res.sendStatus(403)
    }
}

const postId = (req, res, next) => {

    const { origin, destination, date, time, availableSeats, price, image, latitudeOrigin, longitudeOrigin, latitudeDestination, longitudeDestination } = req.body
    const { _id: owner } = req.payload
    const location = {
        type: 'Point',
        coordinatesDestination: [longitudeOrigin, latitudeOrigin],
        coordinatesOrigin: [longitudeDestination, latitudeDestination]
    }

    Trip
        .create({ origin, destination, date, time, availableSeats, price, owner, image, location })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}




module.exports = {
    getAllTrips,
    getId,
    deleteId,
    putId,
    postId
}