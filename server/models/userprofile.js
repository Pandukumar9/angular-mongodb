const mongoose = require('mongoose');//here initialize the mongoose

const userprofielSchema = {
  username : String,
  mobilenumber : Number,
  position : String,
  profilpic : String,
  email: String,
  password: String
}

module.exports = mongoose.model('userprofile', userprofielSchema, 'userprofiles');
