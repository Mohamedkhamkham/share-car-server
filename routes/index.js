module.exports = app => {

    const trips = require('./trips.routes')
    app.use('/api/trips', trips)

    const users = require('./users.routes')
    app.use('/api/users', users)

    const reservations = require('./reservados.routes')
    app.use('/api/reservas', reservations)

    const favoritos = require('./favoritos.routes')
    app.use('/api/favoritos', favoritos)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)
}