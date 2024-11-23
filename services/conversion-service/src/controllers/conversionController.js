const libreOfficeUtils = require('../utils/libreOfficeUtils');
const path = require('path');

exports.convertDocxToPdf = async (req, res) => {
  const { fileName } = req.body; // Expecting fileName from the request body

  if (!fileName) {
    return res.status(400).json({ message: 'File name is required' });
  }

  // Define input and output file paths
  const inputPath = path.resolve(__dirname, '../../../upload-service/uploads', fileName);
  const outputPath = path.resolve(__dirname, '../../converted', fileName.replace('.docx', '.pdf'));

  try {
    // Call the conversion utility
    const result = await libreOfficeUtils.convertToPdf(inputPath, outputPath);

    // Send success response with PDF path
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'File conversion failed', error: error.message });
  }
};
