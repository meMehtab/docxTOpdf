const express = require('express');
const conversionController = require('../controllers/conversionController');

const router = express.Router();

router.post('/', conversionController.convertDocxToPdf);

module.exports = router;
