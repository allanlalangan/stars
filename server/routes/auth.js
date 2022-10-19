const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login/success', async (req, res) => {
  try {
    if (req.user) {
      res.status(200).json(req.user);
    } else {
      res.status(403).json({ message: 'Not Authorized' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/login/failed', async (req, res) => {
  try {
    res.status(401).json({ message: 'Login Failed' });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/altar',
    failureRedirect: '/',
  })
);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/logout', (req, res, next) => {
  req.logout((error) => {
    if (error) return next(error);
    res.redirect('http://localhost:3000/login');
  });
});

module.exports = router;
