const express = require('express')
const router = express.Router()
const Ecomm = require('../controllers/eCommController.js')
router.post('/register',Ecomm.registerNewUser)
router.post('/login',Ecomm.loginUser)
module.exports = {router}