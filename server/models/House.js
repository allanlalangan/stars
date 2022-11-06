const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseSchema = Schema({
  // point_type: String, // 'House'
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chart: { type: Schema.Types.ObjectId, ref: 'Chart', required: true },

  name: {
    type: String,
    required: true,
  },
  quality: String,
  element: String,
  sign: String,
  sign_num: Number,
  position: Number,
  abs_pos: Number,
  emoji: String,
});

module.exports = mongoose.model('House', HouseSchema);
