const DataOperation = require('../models/studentModel.js')
async function getAllStudents(req,res,next) {
    //order this function to give the data
    const answer = await DataOperation.getStudentData()
    const finalAns = answer[0]
    res.json([{msg : "Getting all the students from the database"},{finalAns}])
}
async function addNewStudent(req,res,next) {
    const answer = await DataOperation.addStudentData(req.body)
    res.json({msg : "Added a new student to the database"})
}
async function changeStudentDetails(req,res,next) {
    const id = Number(req.params.id)
    const answer = await DataOperation.editStudentData(req.body , id)
    res.json({msg : "Student Details changed successfully"})
}
async function deleteStudentDetails(req,res,next) {
    const id = Number(req.params.id)
    const answer = await DataOperation.deleteStudentData(id)
    res.json({msg : "Student Details deleted successfully"})
}
module.exports = {getAllStudents,addNewStudent,changeStudentDetails,deleteStudentDetails}