const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetSchema = Schema({
  // point_type: String, // 'Planet'
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chart: { type: Schema.Types.ObjectId, ref: 'Chart', required: true },

  name: {
    type: String,
    enums: [
      'Sun',
      'Moon',
      'Mercury',
      'Venus',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune',
      'Pluto',
    ],
  },
  quality: String,
  element: String,
  sign: String,
  sign_num: Number,
  position: Number,
  abs_pos: Number,
  emoji: String,
  house: String,
  retrograde: Boolean,
});

module.exports = mongoose.model('Planet', PlanetSchema);
