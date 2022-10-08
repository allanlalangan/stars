const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log(`Server start on port: ${PORT}`);
});

connectDB();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users_routes'));
app.use('/api/posts', require('./routes/posts_routes'));

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});
