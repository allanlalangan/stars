const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LunarPhaseSchema = Schema({
  // point_type: String, // 'House'
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chart: { type: Schema.Types.ObjectId, ref: 'Chart', required: true },

  degrees_between_s_m: Number,
  moon_phase: Number,
  sun_phase: Number,
  moon_emoji: String,
});

module.exports = mongoose.model('LunarPhase', LunarPhaseSchema);
