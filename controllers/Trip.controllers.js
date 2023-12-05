// const Trip = require('../models/Trip.model')


// const getAllTrips = (req, res) => {

//     Trip
//         .find()
//         .sort({ origin: 1 })
//         .select({
//             origin: 1,
//             destination: 1,
//             date: 1,
//             time: 1,
//             price: 1,
//             availableSeats: 1,
//             owner: 1,
//             image: 1
//         })
//         .then(response => res.json(response))
//         .catch(err => next(err));
// }


// module.exports = {
//     getAllTrips
// }