const express = require('express')
const router = express.Router()
const {verifyToken} = require('../Middleware/verifyToken.js')
const protectedRoutes = require('../controllers/ProtectedController.js')
router.post('/',verifyToken,protectedRoutes.LoginRegisterCallback)
router.post('/contactForm',verifyToken,protectedRoutes.saveContactMessage)

module.exports = {router}