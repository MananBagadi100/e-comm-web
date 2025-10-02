const express = require('express')
const router = express.Router()
const Student = require('../controllers/studentController.js')
//it says as soon as you get to this route , execute this callback, that's it 
router.get('/all',Student.getAllStudents)
router.post('/',Student.addNewStudent)
router.patch('/:id',Student.changeStudentDetails)
router.delete('/:id',Student.deleteStudentDetails)
module.exports = {router}