const express = require('express');
const router = express.Router();
const Contact = require('../models/Contacts');
const auth = require('../middleware/auth');
const moment = require('moment');
const { check, validationResult } = require('express-validator');

// @route   GET /api/contacts
// @desc    to get all contacts for a particular logged in user
// @access  Private
// in postman, no body is required. Just use the token for logged in user in 'x-auth-token' header.
// Getting login info from 'payload' in 'token' from 'auth' middleware
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ creator: req.user.id }); // set in auth middleware

        if (!contacts) {
            console.error('Error in getting all contacts for a particular user.');
            return res.status(404).json({ message: 'Could not find contacts for this user!' });
        }

        return res.status(200).json(contacts);// same as .json({ contacts: contacts })
    } catch (error) {
        console.error('Error in getting all contacts for a particular user.. ' + error);
        res.status(500).json({ message: 'Internal Server Error!!' });
    }

});

// @route   POST /api/contacts
// @desc    add new contact for existing logged in user.
// @access  Private
// In postman body, enter details for new contact to be created. Header 'x-auth-token' and token required.
// Getting creator info from 'payload' in 'token' from 'auth' middleware.
router.post('/', auth, [
    check('name', 'Name is required').notEmpty(), // contact should have a name
    check('email', 'Please enter valid email address').isEmail(),
    check('phone', 'Please enter valid phone number').optional().matches(/^[1-9]\d{2}-[1-9]\d{2}-\d{4}$/)
    // check('phone', 'Please enter valid phone number').optional({ checkFalsy : true, nullable: true }).isMobilePhone()
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {

        const createdContact = new Contact({
            name,
            email,
            phone,
            type,
            creator: req.user.id
        });

        const contact = await createdContact.save();
        res.status(201).json({ contact });
        // res.status(200).send("Passed!");
    } catch (error) {
        console.error('Error in creating new contact for user. ' + error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

// @route   PUT /api/contacts/:id
// @desc    update a contact
// @access  Private
// Getting login info from 'payload' in 'token' from 'auth' middleware
// In postman body, enter details for contact to be updated. Header 'x-auth-token' and token required.
router.put('/:id', auth, [
    check('name', 'Name is required').notEmpty(), // contact should have a name
    check('email', 'Please enter valid email address').isEmail(),
    check('phone', 'Please enter valid phone number').optional().matches(/^[1-9]\d{2}-[1-9]\d{2}-\d{4}$/)
    // check('phone', 'Please enter valid phone number').optional({ checkFalsy: true, nullable: true }).isMobilePhone()
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) {
            console.error('Requested contact not found for this user.');
            return res.status(404).json({ message: 'Could not find requested contact!' });
        }

        // Make sure creator is same as user logged in
        // Make sure user owns this contact
        // typeof contact.creator is object. So convert to string.
        if (contact.creator.toString() !== req.user.id) {
            return res.status(401).json({ message: "Unauthorized access!" });
        }

        const { name, email, phone, type } = req.body;

        // Checking that fields to be updated have a valid value, otherwise 'null' will be set.
        const contactFields = {};
        if (name) contactFields.name = name;
        if (email) contactFields.email = email;
        if (phone) contactFields.phone = phone;
        if (type) contactFields.type = type;
        contactFields.date = moment().toDate();

        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            contactFields,
            { new: true } // returns updated document
        );

        if (!updatedContact) {
            console.error('Error in updating contact for this user.');
            return res.status(404).json({ message: 'Could not update requested contact!' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        console.error('Error in updating contact for this user.. ' + error);
        return res.status(404).json({ message: 'Could not update requested contact!' });
    }
});

// @route   DELETE /api/contacts/:id
// @desc    delete a contact
// @access  Private
// Getting login info from 'payload' in 'token' from 'auth' middleware
// In postman body, enter id for contact to be deleted. Header 'x-auth-token' and token required.
router.delete('/:id', auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) {
            console.error('Requested contact not found for this user.');
            return res.status(404).json({ message: 'Could not find requested contact!' });
        }

        // Make sure creator is same as user logged in
        // Make sure user owns this contact
        // typeof contact.creator is object. So convert to string.
        if (contact.creator.toString() !== req.user.id) {
            return res.status(401).json({ message: "Unauthorized access!" });
        }

        const deletedContact = await Contact.findByIdAndRemove(req.params.id);

        if (!deletedContact) {
            console.error('Error in deleting contact for this user.');
            return res.status(404).json({ message: 'Could not delete requested contact!' });
        }
        res.status(200).json({ message: "Contact deleted successfully!" });
    } catch (error) {
        console.error('Error in deleting contact for this user. ' + error);
        return res.status(404).json({ message: 'Could not delete requested contact!' });
    }
});

module.exports = router;