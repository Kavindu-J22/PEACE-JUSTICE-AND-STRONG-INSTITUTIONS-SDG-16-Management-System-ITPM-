const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String
  },
  country: {
    type: String
  },
  address: {
    type: String
  },
  NIC: {
    type: String,
    unique: true
  },
  role: {
    type: String,
    enum: ['user', 'partner'],
    default: 'user'
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;