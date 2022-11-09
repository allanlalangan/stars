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
    reaction_PrayBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_FireBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_ApplaudBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reaction_SadBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

PostSchema.statics.likePost = async function (req) {
  const post = await this.findById(req.params.id);
  const user = await User.findById(req.user.id);
  let updatedLikes;
  const liked = post.likedBy;
  if (req.body.checked) {
    console.log(`${user.id} liked ${req.body.id}`);
    updatedLikes = [...liked, user.id];
  } else if (!req.body.checked) {
    console.log(`${user.id} unliked ${req.body.id}`);
    updatedLikes = liked.filter((user) => user.toString() !== req.user.id);
  }

  const updatedPost = await this.findByIdAndUpdate(
    req.params.id,
    { likedBy: updatedLikes },
    {
      new: true,
    }
  );
  const posts = await this.find();
  console.log(posts);

  return posts;
};

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
    const chart = await Chart.findById(req.body.chart).select('-chart_image');
    const postChart = {
      name: chart.name,
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
