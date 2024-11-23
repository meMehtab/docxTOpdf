const { exec } = require('child_process');
const fs = require('fs');

exports.convertToPdf = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    const command = `libreoffice --headless --convert-to pdf "${inputPath}" --outdir "${outputPath}"`;
    const outputDir = outputPath.substring(0, outputPath.lastIndexOf('/'));

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(`LibreOffice conversion failed: ${stderr || error.message}`));
      }

      resolve(stdout.trim());
    });
  });
};
