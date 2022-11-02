const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      res.status(400).json({
        message: 'Please complete all required fields',
      });
    } else {
      const user = await User.registerUser(name, email, password);
      res
        .status(201)
        .json({
          token: generateToken(user._id),
          message: 'Account created. Welcome to Stars.',
        });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    await res.status(200).json({ message: 'Login Route' });
  } catch (error) {
    await res.status(500).json({ message: error.message || error });
  }
};

const getUser = async (req, res) => {
  try {
    await res.status(200).json({ message: 'Get User Route' });
  } catch (error) {
    await res.status(500).json({ message: error.message || error });
  }
};

module.exports = { register, login, getUser };
