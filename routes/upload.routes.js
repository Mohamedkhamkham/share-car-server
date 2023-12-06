const router = require("express").Router()

const uploadImage = require("../controllers/Upload.controllers")
const uploaderMiddleware = require("../middlewares/uploader.middleware")
console.log("estoy en el backend en las rutas--------------------------")

router.post('/image', uploaderMiddleware.single('imageData'), uploadImage)

module.exports = router


