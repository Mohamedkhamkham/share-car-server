const { Schema, model } = require("mongoose")

const reservadoSchema = new Schema(
    {
        user_id: {
            type: String,
            required: [true, 'El user_id es obligatorio.']
        },
        trips: [{
            type: Schema.Types.ObjectId,
            ref: 'Trip'
        }]
    },
    {
        timestamps: true,
    }
);

const Reservado = model("Reservado", reservadoSchema)

module.exports = Reservado