module.exports = app => {


    // TODO: CAMBIAR BASE URL A /api/trips
    const trips = require('./trips.routes')
    app.use('/api', trips)


    // TODO: CAMBIAR BASE URL A /api/auth
    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)
}