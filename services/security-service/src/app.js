const express = require('express');
const cors = require('cors');
const securityRoutes = require('./routes/securityRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/secure', securityRoutes);

module.exports = app;
