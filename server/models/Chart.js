const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChartSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    liked_by: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    name: { type: String, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    hour: { type: Number },
    minute: { type: Number },
    city: { type: String },
    nation: { type: String },
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    tz_str: { type: String, required: true },
    zodiac_type: { type: String, required: true },
    local_time: { type: Number, required: true },
    utc_time: { type: Number, required: true },
    julian_day: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Chart', ChartSchema);
