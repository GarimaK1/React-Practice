const express = require('express');
const router = express.Router();

// @route   GET /api/contacts
// @desc    to get all contacts for a particular user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts for this user');
});

// @route   POST /api/contacts
// @desc    add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add new contact for this user');
});

// @route   PUT /api/contacts/:id
// @desc    update a contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update a contact for this user');
});

// @route   DELETE /api/contacts/:id
// @desc    delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete a contact for this user');
});

module.exports = router;