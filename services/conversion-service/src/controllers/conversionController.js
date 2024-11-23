const libreOfficeUtils = require('../utils/libreOfficeUtils');
const path = require('path');

exports.convertDocxToPdf = async (req, res) => {
  const { fileName } = req.body; // Expecting fileName from the request body

  if (!fileName) {
    return res.status(400).json({ message: 'File name is required' });
  }

  const inputPath = path.resolve(__dirname, '../../uploads', fileName);
  const outputPath = path.resolve(__dirname, '../../converted', fileName.replace('.docx', '.pdf'));

  try {
    await libreOfficeUtils.convertToPdf(inputPath, outputPath);
    res.status(200).json({
      message: 'File converted successfully',
      pdfFilePath: outputPath
    });
  } catch (error) {
    res.status(500).json({ message: 'File conversion failed', error: error.message });
  }
};
