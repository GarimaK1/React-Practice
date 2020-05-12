const express = require('express');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

// @route   GET /api/auth
// @desc    to get logged in user (getting the user thats already logged in)
// @access  Private
// Getting login info from 'user' in 'payload' in 'token' from 'auth' middleware
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        // we are returning complete user object without password to maintain security.
        // if user doesn't exist in DB
        if (!user) {
            return res.status(500).json({ message: 'User does not exist!' });
        }
        // users exists. return the logged in user object
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error in getting logged user. ' + error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

// @route   POST /api/auth
// @desc    Login user: authenticate user and get access token
// @access  Public
// Setting user info in 'user' in 'payload' in 'token'
router.post('/', [
    check('email', 'Please enter valid email address').isEmail(),
    check('password', 'Invalid password').isLength({ min: 4 })
],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { email, password } = req.body; // password here is in plain-text

        try {
            const loggedInUser = await User.findOne({ email });

            if (!loggedInUser) { // User email not found in DB!
                return res.status(400).json({ message: 'Invalid credentials!' });
            }

            // its better if we don't explicitly store value of password anywhere.
            // so use it directly, don't make unnecessary variable: const hash = loggedInUser.password;
            // https://mongoosejs.com/docs/documents.html
            // Mongoose documents track changes. user is a document. You can modify a document using
            // vanilla JavaScript assignments and Mongoose will convert it into MongoDB update operators.
            const result = await bcrypt.compare(password, loggedInUser.password);

            if (!result) { // if password in Db and user request do not match 
                return res.status(401).json({ message: 'Invalid credentials!' });
            }

            const payload = {
                user: {
                    id: loggedInUser.id
                }
            };
            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }, (error, token) => {
                if (error) {
                    return res.status(500).json({ message: 'Error in generating token' });
                    // or throw error;
                }
                //return token that will be used later for authentication.
                return res.status(200).json({ token });// same as writing .json({token: token})
            });
            // res.status(200).json({ message: 'User logged in successfully!' });
        } catch (err) {
            console.log('Error in user login: ' + err);
            res.status(500).json({ message: 'Internal Server Error!' });
        }
    });

module.exports = router;