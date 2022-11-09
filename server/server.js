require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db');
const express = require('express');

const app = express();

connectDB();

app.use(cors());
// app.use(
//   cors({
//     origin: 'https://stars-astro.netlify.app',
//     methods: 'GET,POST,PUT,DELETE',
//     credentials: true,
//   })
// );
const PORT = process.env.PORT;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/astro', require('./routes/astro'));
app.use('/auth', require('./routes/auth'));

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

app.listen(PORT || 5000, () => {
  console.log(`Server start on port: ${PORT}`);
});
