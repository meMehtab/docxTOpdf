const express = require('express');
const uploadController = require('../controllers/uploadController');
const metadataController = require('../controllers/metadataController');

const router = express.Router();

router.post('/', uploadController.uploadFile);
router.get('/metadata/:fileName', metadataController.getFileMetadata);

module.exports = router;
