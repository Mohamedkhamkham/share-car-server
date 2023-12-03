const { Schema, model } = require("mongoose")

const favoritoSchema = new Schema(
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

const Favorito = model("Favorito", favoritoSchema)

module.exports = Favorito