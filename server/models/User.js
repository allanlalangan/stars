const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = Schema(
  {
    googleId: String,
    firstName: String,
    lastName: String,
    image: String,
    username: String,
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: true,
    },
    password: {
      type: String,
    },
    natalChart: { type: Schema.Types.ObjectId, ref: 'Chart' },
  },
  { timestamps: true }
);

UserSchema.statics.loginUser = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw Error('Invalid Email');
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw Error('Invalid Password');
  } else {
    return user;
  }
};

UserSchema.statics.registerUser = async function (username, email, password) {
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw Error('Email is already registered');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = this.create({ username, email, password: hash });
  return user;
};

UserSchema.statics.googleOAuth = async function (decoded) {
  const existingUser = await this.findOne({ email: decoded.email });
  if (existingUser) {
    throw Error('Email is already registered');
  }
  const user = this.create({
    googleId: decoded.sub,
    firstName: decoded.given_name,
    lastName: decoded.family_name,
    email: decoded.email,
    username: decoded.name,
    image: decoded.picture,
  });
  return user;
};

module.exports = mongoose.model('User', UserSchema);
