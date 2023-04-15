const express = require('express')
const router = express.Router()
const { getAllUsers,createDevice } = require('../controllers/usersController')

router.post('/', createDevice)
router.get('/', getAllUsers)

module.exports = router