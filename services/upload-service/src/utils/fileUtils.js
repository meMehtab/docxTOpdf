const fs = require('fs');
const path = require('path');

exports.deleteFile = (fileName) => {
  const filePath = path.join(__dirname, '../../uploads', fileName);

  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
