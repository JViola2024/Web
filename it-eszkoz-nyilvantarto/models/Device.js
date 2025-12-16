const mongoose = require('mongoose');

const eszkozSchema = new mongoose.Schema({
  nev: {
    type: String,
    required: true
  },
  tipus: {
    type: String,
    required: true
  },
  sorozatszam: {
    type: String,
    required: true,
    unique: true
  },
  allapot: {
    type: String,
    default: 'hasznalhato'
  },
  beszerzesDatuma: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Eszkoz', eszkozSchema);
