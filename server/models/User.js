const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = Schema(
  {
    googleId: String,
    firstName: String,
    lastName: String,
    image: String,
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.statics.registerUser = async function (name, email, password) {
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw Error('Email is already registered');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = this.create({ firstName: name, email, password: hash });
  return user;
};

module.exports = mongoose.model('User', UserSchema);
