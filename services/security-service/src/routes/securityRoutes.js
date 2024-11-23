const express = require('express');
const securityController = require('../controllers/securityController');

const router = express.Router();

router.post('/encrypt', securityController.encryptPdf);

module.exports = router;
