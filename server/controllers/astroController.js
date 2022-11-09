const Chart = require('../models/Chart');
const axios = require('axios');

const getToday = async (req, res) => {
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
};

const getCharts = async (req, res) => {
  const charts = await Chart.find({ user: req.user.id });
  await res.status(200).json(charts);
};

const getNatalData = async (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://astrologer.p.rapidapi.com/api/v2/birth-data',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.ASTROLOGER_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.ASTROLOGER_RAPID_API_HOST,
    },
  };

  try {
    const { data } = await axios.post(
      'https://astrologer.p.rapidapi.com/api/v2/birth-chart',
      req.body,
      options
    );
    const chartData = await Chart.createChart(data, req);

    res.status(201).json(chartData);
  } catch (error) {
    console.log(error);
  }
};

const deleteChart = async (req, res) => {
  const chart = await Chart.findById(req.params.id);
  try {
    if (!chart) {
      res.status(404);
      throw new Error('Chart not found');
    } else if (chart.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('Chart delete not authorized');
    }

    await chart.remove();
    res.status(200).json({
      message: `post deleted`,
      deletedChartId: req.params.id,
      charts: await Chart.find({ user: req.user.id }),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getNatalData, getToday, getCharts, deleteChart };
