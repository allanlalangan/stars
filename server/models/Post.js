const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Chart = require('./Chart');
const User = require('./User');
const PostSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userDetails: { type: Object, required: true },
    // chart: { type: Schema.Types.ObjectId, ref: 'Chart', default: null },
    chart: { type: Object, default: null },
    body: { type: String, max: 200 },
    likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_LoveBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_FireBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_ApplaudBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_SadBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

PostSchema.statics.createPost = async function (req) {
  let post;
  const user = await User.findById(req.user.id).select('-password');
  if (!req.body.chart) {
    post = await this.create({
      user: req.user.id,
      userDetails: { name: user.username, natalChart: user.natalChart },
      body: req.body.text,
    });
  } else {
    const chart = await Chart.findById(req.body.chart);
    const postChart = {
      name: chart.name,
      chart_image: chart.chart_image,
      day: chart.day,
      month: chart.month,
      year: chart.year,
      hour: chart.hour,
      minute: chart.minute,
      city: chart.city,
      planets: chart.planets,
      houses: chart.houses,
      lunar_phase: chart.lunar_phase,
    };

    post = await this.create({
      user: req.user.id,
      userDetails: { name: user.username, natalChart: user.natalChart },
      chart: postChart,
      body: req.body.text,
    });
  }
  return post;
};

module.exports = mongoose.model('Post', PostSchema);
