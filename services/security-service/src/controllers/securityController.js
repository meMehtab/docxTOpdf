const encryptionUtils = require('../utils/encryptionUtils.js');

exports.encryptPdf = async (req, res) => {
  const { pdfFilePath, password } = req.body; // Expects the path of the PDF and the password

  if (!pdfFilePath || !password) {
    return res.status(400).json({ message: 'PDF file path and password are required' });
  }

  try {
    const encryptedPdfPath = await encryptionUtils.encryptPdf(pdfFilePath, password);
    res.status(200).json({
      message: 'PDF secured successfully',
      encryptedPdfPath
    });
  } catch (error) {
    res.status(500).json({ message: 'PDF encryption failed', error: error.message });
  }
};
