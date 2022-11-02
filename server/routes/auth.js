const express = require('express');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const { googleOAuth } = require('../controllers/authController');

router.post('/google', googleOAuth);

router.post('/google/refresh-token', async (req, res) => {
  const user = new UserRefreshClient(
    clientId,
    clientSecret,
    req.body.refreshToken
  );
  const { credentials } = await user.refreshAccessToken(); // optain new tokens
  res.json(credentials);
});

module.exports = router;
