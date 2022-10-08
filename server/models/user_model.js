const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    given_name: { type: String, required: [true, 'Please enter your name'] },
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: true,
    },
    password: { type: String, required: [true, 'Please enter a password'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
