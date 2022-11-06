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

module.exports = { getNatalData, getToday };
