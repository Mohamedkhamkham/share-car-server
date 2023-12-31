const { Schema, model } = require("mongoose")

const tripSchema = new Schema(
    {
        origin: {
            type: String,
            required: [true, 'El origen es obligatorio.']
        },
        destination: {
            type: String,
            required: [true, 'El destino es obligatorio.']
        },
        date: {
            type: Date,
            required: [true, 'La fecha es obligatoria.']
        },
        time: {
            type: String,
            required: [true, 'La hora es obligatoria.']
        },
        availableSeats: {
            type: Number,
            required: [true, 'Las plazas disponibles son obligatorias.'],
            min: [1, 'Debe haber al menos una plaza disponible.']
        },
        price: {
            type: Number,
            required: [true, 'El precio es obligatorio.'],
            min: [0, 'El precio no puede ser negativo.']
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        image: {
            type: String,
            required: [false, ""]
        },
        location: {
            type: {
                type: String
            },
            coordinatesOrigin: {
                type: [Number]
            },
            coordinatesDestination: {
                type: [Number]
            }
        }
    },
    {
        timestamps: true,
    }
);

const Trip = model("Trip", tripSchema)

module.exports = Trip