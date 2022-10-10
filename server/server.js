require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db');
const express = require('express');
const axios = require('axios');

connectDB();

const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log(`Server start on port: ${PORT}`);
});

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get Current Plants Route
app.get('/planetstoday', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://astrologer.p.rapidapi.com/api/v2/now',
    headers: {
      'X-RapidAPI-Key': process.env.ASTROLOGER_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.ASTROLOGER_RAPID_API_HOST,
    },
  };
  axios(options).then((resp) => res.json(resp.data));
});

// Routes
app.use('/api/users', require('./routes/users_routes'));
app.use('/api/posts', require('./routes/posts_routes'));

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});
