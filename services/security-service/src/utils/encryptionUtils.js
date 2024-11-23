const hummus = require('muhammara');
const path = require('path');
const fs = require('fs');

exports.encryptPdf = (pdfFilePath, password) => {
  return new Promise((resolve, reject) => {
    try {
      const encryptedPdfPath = pdfFilePath.replace('.pdf', '-encrypted.pdf');

      // Open the PDF for encryption
      const writer = hummus.createWriterToModify(
        pdfFilePath,
        { modifiedFilePath: encryptedPdfPath }
      );

      writer.encrypt({
        userPassword: password,
        ownerPassword: password,
        userProtectionFlag: 4 // Allows viewing and printing only
      });

      writer.end();

      // Ensure the new file exists before resolving
      if (fs.existsSync(encryptedPdfPath)) {
        resolve(encryptedPdfPath);
      } else {
        reject(new Error('Failed to create the encrypted PDF file.'));
      }
    } catch (error) {
      reject(error);
    }
  });
};
