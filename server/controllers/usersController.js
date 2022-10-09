const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  try {
    if (!name || !email || !password) {
      await res.status(400).json({ message: 'Please complete all fields' });
    }
    if (existingUser) {
      await res.status(400).json({ message: 'User already exists' });
    }
  } catch (error) {}
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    await res.status(200).json({ message: 'Login Route' });
  } catch (error) {}
};

module.exports = { register, login };
