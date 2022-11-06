const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChartSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    liked_by: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    chart_image: { type: String },
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
    planets: { type: Object },
    houses: { type: Object },
    lunar_phase: { type: Object },
  },
  { timestamps: true }
);

ChartSchema.statics.createChart = async function (data, req) {
  console.log(req.user.id);
  // console.log(data);
  const chart = await this.create({
    user: req.user.id,
    chart_image: data.chart,
    name: data.data.name,
    year: data.data.year,
    month: data.data.month,
    day: data.data.day,
    hour: data.data.hour,
    minute: data.data.minute,
    city: data.data.city,
    nation: data.data.nation,
    lng: data.data.lng,
    lat: data.data.lat,
    tz_str: data.data.tz_str,
    zodiac_type: data.data.zodiac_type,
    local_time: data.data.local_time,
    utc_time: data.data.utc_time,
    julian_day: data.data.julian_day,

    planets: {
      sun: data.data.sun,
      moon: data.data.moon,
      mercury: data.data.mercury,
      venus: data.data.venus,
      mars: data.data.mars,
      jupiter: data.data.jupiter,
      saturn: data.data.saturn,
      uranus: data.data.uranus,
      neptune: data.data.neptune,
      pluto: data.data.pluto,
      mean_node: data.data.mean_node,
      true_node: data.data.true_node,
    },
    houses: {
      first_house: data.data.first_house,
      second_house: data.data.second_house,
      third_house: data.data.third_house,
      fourth_house: data.data.fourth_house,
      fifth_house: data.data.fifth_house,
      sixth_house: data.data.sixth_house,
      seventh_house: data.data.seventh_house,
      eighth_house: data.data.eighth_house,
      ninth_house: data.data.ninth_house,
      tenth_house: data.data.tenth_house,
      eleventh_house: data.data.eleventh_house,
      twelfth_house: data.data.twelfth_house,
    },
    lunar_phase: data.data.lunar_phase,
  });
  console.log(chart);
  return chart;
};

module.exports = mongoose.model('Chart', ChartSchema);
