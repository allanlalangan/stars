const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: '/',
  })
);
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

module.exports = router;
