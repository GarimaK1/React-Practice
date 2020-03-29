const express = require('express');
const router = express.Router();

// @route   GET /api/auth
// @desc    to get logged in user (getting the user thats already logged in)
// @access  Private
router.get('/', (req, res) => {
    console.log(req.params);
    res.status(200).send('Get logged in user');
});

// @route   POST /api/auth
// @desc    authenticate user and get access token
// @access  Public
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;