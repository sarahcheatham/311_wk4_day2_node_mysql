const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/users', usersController.getAllUsers)

router.get('/users/:id', usersController.getUserById)

router.post('/users', usersController.createUser)

router.put('/users/:id', usersController.updateUserById)

router.delete('/users/:first_name', usersController.deleteUserByFirstName)

module.exports = router;