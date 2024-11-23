const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/upload', uploadRoutes);

module.exports = app;
