const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'El email de usuario es obligatorio'],
    minlength: [5, 'El email necesita mínimo 5 caracteres']
  },
  password: {
    type: String,
    required: [true, 'La contraseña de usuario es obligatoria'],
    minlength: [3, 'La contraseña debe ser de mínimo 3 caracteres']
  },
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio'],
    minlength: [3, 'El usuario necesita mínimo 3 caracteres']
  },
  // carSpecs: {
  //   model: String,
  //   color: String,
  //   electric: Boolean
  // },
  carModel: {
    type: String,
    required: [true, 'El modelo de coche es obligatorio']
  },
  carColor: {
    type: String,
    required: [true, 'El color de coche es obligatorio']
  },
  imageUrl: {
    type: String,
    required: [false]
  }
},
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword
  next()
})

const User = model("User", userSchema)

module.exports = User