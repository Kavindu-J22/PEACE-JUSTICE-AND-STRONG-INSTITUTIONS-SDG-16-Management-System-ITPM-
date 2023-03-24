const express = require('express');
const router = express.Router();

// Create a new user
router.post('/register', (req, res) =>{
    res.json({msg: "test Router"})
})

// // Get all users
// router.get('/', userController.getAllUsers);

// // Get a user by ID
// router.get('/:id', userController.getUserById);

// // Update a user by ID
// router.put('/:id', userController.updateUserById);

// // Delete a user by ID
// router.delete('/:id', userController.deleteUserById);

module.exports = router