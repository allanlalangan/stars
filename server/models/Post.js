const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    chart: { type: Schema.Types.ObjectId, ref: 'Chart', required: true },
    body: String,
    liked_by: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
