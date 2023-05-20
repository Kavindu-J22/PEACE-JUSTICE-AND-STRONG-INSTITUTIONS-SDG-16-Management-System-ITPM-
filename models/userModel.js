const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    nicOrPassportNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0 // 1 for admin, 2 for user       
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema);
