const express = require('express')
const router = express.Router()
const { getAllUsers,createDevice } = require('../controllers/usersController')

router.post('/users', createDevice)
router.get('/users', getAllUsers)

module.exports = router