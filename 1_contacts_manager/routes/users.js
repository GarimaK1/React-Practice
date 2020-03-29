const express = require('express');
const router = express.Router();

// @route   POST /api/users
// @desc    to register a new user
// @access  Public
router.post('/', (req, res) => {
    res.send('Register this user');
});

module.exports = router;