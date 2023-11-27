module.exports = app => {

    const tripsRoutes = require("./trips.routes")
    app.use("/api/trips", tripsRoutes)

}