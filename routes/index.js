module.exports = app => {

    const trips = require('./trips.routes')
    app.use('/car', trips)


    const authRoutes = require("./auth.routes")
    app.use("/car/auth", authRoutes)
}



