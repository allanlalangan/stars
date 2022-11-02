const express = require('express');
const router = express.Router();
const jwtDecode = require('jwt-decode');

const { OAuth2Client, UserRefreshClient } = require('google-auth-library');

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

router.post('/google', async (req, res) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
  const decoded = jwtDecode(tokens.id_token);
  console.log(req.headers);
  console.log(decoded);

  res.json(decoded);
});

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
