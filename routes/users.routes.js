const router = require("express").Router()

// const { updateFavoritoById } = require("../controllers/Favoritos.controllers");
const { getUser, gettUserById, deleteUserById, updateUserById } = require("../controllers/User.controllers");
const verifyToken = require("../middlewares/verifyToken");
// const User = require("../models/User.model");

router.get("/", verifyToken, getUser);

router.get("/:id", verifyToken, gettUserById)

router.delete("/:id", verifyToken, deleteUserById)

router.put("/:id", verifyToken, updateUserById)

module.exports = router