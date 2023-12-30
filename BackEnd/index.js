const express = require('express');
const mongoose = require('./db');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user'); // Require the userRoutes file

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('sharjeel ahmed').status(200); // Fixed the status method syntax
});

// Use the userRoutes with the correct path
app.use('/api/user', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
