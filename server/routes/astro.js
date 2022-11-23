const axios = require('axios');
const express = require('express');
const {
  getNatalData,
  getToday,
  getChart,
  getCharts,
  deleteChart,
} = require('../controllers/astroController');
const { protectRoute } = require('../middleware/auth');
const router = express.Router();

router.get('/charts/today', protectRoute, getToday);
router.get('/charts', protectRoute, getCharts);
router.post('/charts', protectRoute, getNatalData);
router.delete('/charts/:id', protectRoute, getChart);
router.delete('/charts/:id', protectRoute, deleteChart);

module.exports = router;
