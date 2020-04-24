const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema(
    // Each user has their own list of contacts
    {
        creator: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, // 'users' collection in mongodb
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String },
        type: { type: String, default: 'Personal' }, // Personal or Professional    
        date: { type: Date, default: Date.now }
    });

module.exports = mongoose.model('Contact', ContactsSchema);