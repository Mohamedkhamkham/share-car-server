const router = require("express").Router()

const verifyToken = require("../middlewares/verifyToken");
const Trip = require('../models/Trip.model')

const {
    getAllTrips,
    getId,
    deleteId,
    putId,
    postId
} = require("../controllers/Trip.controllers")

router.get("/getAllTrips", verifyToken, getAllTrips);

router.get("/:id", verifyToken, getId)

router.delete("/:id", verifyToken, deleteId)

router.put("/:id", verifyToken, putId)

router.post("/saveTrip", verifyToken, postId)



module.exports = router