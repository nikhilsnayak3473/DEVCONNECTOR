const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

// @route   GET api/users
// desc     Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('user route');
});

module.exports = router;
