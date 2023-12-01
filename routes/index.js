module.exports = app => {



    const trips = require('./trips.routes')
    app.use('/api/trips', trips)



    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)
}