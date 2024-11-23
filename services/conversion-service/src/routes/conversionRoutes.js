const express = require('express');
const conversionController = require('../controllers/conversionController.js');

const router = express.Router();

router.post('/', conversionController.convertDocxToPdf);

module.exports = router;
