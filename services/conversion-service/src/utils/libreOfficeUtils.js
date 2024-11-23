const libre = require('libreoffice-convert');
const fs = require('fs').promises;
const path = require('path');

// Convert DOCX to PDF using LibreOffice
exports.convertToPdf = async (inputPath, outputPath) => {
  try {
    // Read the DOCX file as a buffer
    const docxBuf = await fs.readFile(inputPath);

    // Convert the DOCX buffer to PDF using the callback-based convert method
    return new Promise((resolve, reject) => {
      libre.convert(docxBuf, '.pdf', undefined, (err, pdfBuf) => {
        if (err) {
          reject(new Error(`Error during conversion: ${err.message}`));
        }

        // Ensure the output directory exists
        const outputDir = path.dirname(outputPath);
        fs.mkdir(outputDir, { recursive: true }).then(() => {
          // Write the converted PDF to the output path
          fs.writeFile(outputPath, pdfBuf).then(() => {
            resolve({ message: 'File converted successfully', pdfFilePath: outputPath });
          }).catch((writeError) => {
            reject(new Error(`Error writing PDF file: ${writeError.message}`));
          });
        }).catch((mkdirError) => {
          reject(new Error(`Error creating directory: ${mkdirError.message}`));
        });
      });
    });

  } catch (error) {
    console.error('Error during file conversion:', error);
    throw new Error(`File conversion failed: ${error.message}`);
  }
};
