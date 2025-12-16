const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  felhasznalonev: {
    type: String,
    required: true,
    unique: true
  },
  jelszo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
