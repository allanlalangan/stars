const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { OAuth2Client, UserRefreshClient } = require('google-auth-library');
const jwtDecode = require('jwt-decode');

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' });
};

const googleOAuth = async (req, res) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
  const token = tokens.id_token;
  const decoded = jwtDecode(token);
  // const user = await User.googleOAuth(decoded);
  const user = {
    googleId: decoded.sub,
    firstName: decoded.given_name,
    lastName: decoded.family_name,
    email: decoded.email,
    username: decoded.name,
    image: decoded.picture,
  };
  res.status(200).json({
    decoded,
    user,
    token: generateToken(decoded.sub),
    message: 'Welcome to Stars',
  });
};

module.exports = { googleOAuth };
