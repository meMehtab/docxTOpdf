const Recipe = require('muhammara').Recipe;
const fs = require('fs');

exports.encryptPdf = (pdfFilePath, password) => {
  return new Promise((resolve, reject) => {
    try {
      const encryptedPdfPath = pdfFilePath.replace('.pdf', '-encrypted.pdf');

      // Open the PDF for modification
      const pdfDoc =new Recipe(pdfFilePath, encryptedPdfPath);

      pdfDoc.encrypt({
        userPassword: password,
        ownerPassword: password,
        userProtectionFlag: 4,
      })
      .endPDF();


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
