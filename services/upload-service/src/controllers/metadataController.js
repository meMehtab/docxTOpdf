const fs = require('fs');
const path = require('path');

exports.getFileMetadata = (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, '../../uploads', fileName);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      return res.status(404).json({ message: 'File not found', error: err.message });
    }

    res.status(200).json({
      fileName,
      size: stats.size,
      createdAt: stats.birthtime,
      modifiedAt: stats.mtime
    });
  });
};
