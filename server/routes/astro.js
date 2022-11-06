const axios = require('axios');
const express = require('express');
const { getNatalData, getToday } = require('../controllers/astroController');
const { protectRoute } = require('../middleware/auth');
const router = express.Router();

router.get('/chart/today', protectRoute, getToday);

router.post('/chart', protectRoute, getNatalData);
module.exports = router;
