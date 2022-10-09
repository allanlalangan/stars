const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema(
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
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: 8,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
