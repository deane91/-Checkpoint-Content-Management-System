// routes/content.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth'); // Make sure this path is correct
const Content = require('../models/Content'); // Make sure this path is correct

const router = express.Router();

router.post('/', [auth, [
  check('title', 'Title is required').not().isEmpty(),
  check('body', 'Body is required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, body } = req.body;
  try {
    const newContent = new Content({ title, body });
    const content = await newContent.save();
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
