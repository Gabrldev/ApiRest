const express = require('express')
const router = express.Router()
const { validatorLogin, validatorRegister } = require('../validator/auth')
const { registerCtrl, loginCtrl } = require('../controllers/auth')

// crear item
router.post('/register', validatorRegister, registerCtrl)
router.post('/login', validatorLogin, loginCtrl)

module.exports = router
