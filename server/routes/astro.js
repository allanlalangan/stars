const axios = require('axios');
const express = require('express');
const { protectRoute } = require('../middleware/auth');
const router = express.Router();

router.get('/chart/today', protectRoute, async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://astrologer.p.rapidapi.com/api/v2/now',
    headers: {
      'X-RapidAPI-Key': process.env.ASTROLOGER_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.ASTROLOGER_RAPID_API_HOST,
    },
  };
  try {
    const resp = await axios.get(
      'https://astrologer.p.rapidapi.com/api/v2/now',
      options
    );
    res.status(200).json(resp.data);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
