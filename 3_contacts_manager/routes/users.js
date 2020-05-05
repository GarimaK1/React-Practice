const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

// @route   POST /api/users
// @desc    to register a new user
// @access  Public
// using 'check' of 'express-validator' as middleware to validate input
// Setting user info in 'user' in 'payload' in 'token'
router.post('/', [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please enter valid email address').isEmail(),
    check('password', 'Please enter minimum 4 characters for password').isLength({ min: 4 })
],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({message: "User already exists!"});
            }

            user = new User({
                name,
                email: email,
                password: password
            });
            
            const salt = await bcrypt.genSalt(10);

            // https://mongoosejs.com/docs/documents.html
            // Mongoose documents track changes. user is a document. You can modify a document using
            // vanilla JavaScript assignments and Mongoose will convert it into MongoDB update operators.
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id // Refer for doc id virtual getter: https://mongoosejs.com/docs/guide.html#id
                }
            };
            
            jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600}, (error, token) => {
                if (error) {
                    return res.status(500).json({message: 'Error in generating token'});
                    // or throw error;
                }
                //return token that will be used later for authentication.
                return res.status(201).json({ token });// same as writing .json({token: token})
            }); 
            // res.status(201).json({ message: 'User created successfully!' });
        } 
        catch (error) {
            console.error('Error occurred in creating new user: ' + error);
            res.status(500).json({ message: 'Internal Server Error!'});
        }
    });

module.exports = router;