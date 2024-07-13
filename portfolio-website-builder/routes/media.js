// routes/media.js
const express = require('express');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filePath: req.file.path });
});

module.exports = router;
