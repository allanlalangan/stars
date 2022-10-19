require('dotenv').config();
const passport = require('passport');
const cors = require('cors');
const { connectDB } = require('./config/db');
const express = require('express');
const axios = require('axios');
const session = require('express-session');

const app = express();
require('./config/passport')(passport);

connectDB();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
const PORT = process.env.PORT;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/auth', require('./routes/auth'));

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

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

app.listen(PORT || 5000, () => {
  console.log(`Server start on port: ${PORT}`);
});
