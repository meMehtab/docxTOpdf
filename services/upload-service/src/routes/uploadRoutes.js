const express = require('express');
const uploadController = require('../controllers/uploadController.js');
const metadataController = require('../controllers/metadataController.js');

const router = express.Router();

router.post('/', uploadController.uploadFile);
router.get('/metadata/:fileName', metadataController.getFileMetadata);

module.exports = router;
