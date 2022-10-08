const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    liked_by: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
