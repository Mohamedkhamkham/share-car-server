const router = require("express").Router()

const uploaderMiddleware = require("../middlewares/uploader.middleware")
console.log("estoy en el backend en las rutas--------------------------")

router.post('/image', uploaderMiddleware.single('imageData'), (req, res) => {
    console.log("llego al backend!!!!!------------------------")
    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router


