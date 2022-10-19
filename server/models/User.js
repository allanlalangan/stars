const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = Schema(
  {
    googleId: { type: String, unique: true },
    firstName: { type: String, required: [true, 'Please enter your name'] },
    lastName: String,
    image: String,
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: true,
    },
    password: {
      type: String,
      minLength: 8,
      select: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
