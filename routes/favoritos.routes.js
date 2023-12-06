const router = require("express").Router();
const { getFavoritoById, updateFavoritoById } = require("../controllers/Favoritos.controllers");
const verifyToken = require("../middlewares/verifyToken");
// const Favorito = require('../models/Favorito.model');
// const Trip = require('../models/Trip.model');

router.get("/:id", verifyToken, getFavoritoById);

// TODO: REVISAR QUE NO QUEDE NADA EN CASTELLANO

router.post("/", verifyToken, updateFavoritoById);

module.exports = router;