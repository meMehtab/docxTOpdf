const express = require('express');
const cors = require('cors');
const conversionRoutes = require('./routes/conversionRoutes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/convert', conversionRoutes);

module.exports = app;
