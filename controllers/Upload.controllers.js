

const uploadImage = (req, res) => {
    console.log("llego al backend!!!!!------------------------")
    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
}

module.exports = uploadImage
