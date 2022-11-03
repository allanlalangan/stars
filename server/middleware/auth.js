const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protectRoute = async (req, res, next) => {
  if (!req.headers?.authorization) {
    res.status(401).json({ message: 'No Token' });
    throw Error('No Token');
  }

  if (req.headers.authorization?.startsWith('Bearer')) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      // !! REMOVE PASSWORD FROM REQUEST !!
      req.user = await User.findById(decoded.id)
        .select('-password')
        .select('_id');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not Authorized' });
    }
  }
};

module.exports = { protectRoute };
