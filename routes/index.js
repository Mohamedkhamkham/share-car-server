module.exports = app => {

    const tripsRoutes = require("./trips.routes")
    app.use("/api/trips", tripsRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)
}

