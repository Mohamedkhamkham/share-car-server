const router = require("express").Router();
const { updateReservationById, getReservationById } = require("../controllers/Reservados.controllers");
const verifyToken = require("../middlewares/verifyToken");
const Reservado = require('../models/Reservado.model');
// const Trip = require('../models/Trip.model');

router.get("/:id", verifyToken, getReservationById);

router.post("/", verifyToken, updateReservationById);

module.exports = router;
