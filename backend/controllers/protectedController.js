const protectedOperations = require('../models/ProtectedModels.js')
async function LoginRegisterCallback (req,res,next) {
    res.json({msg : "Token correct and verified. Access Granted !",isLoggedIn:true})
}
async function saveContactMessage (req,res,next) {
    const answer = await protectedOperations.getUserDetails(req.user)
    const queryMessage = {
        "user_id":answer.user_id,
        "username":answer.username,
        "email":answer.email,
        "contactNo":answer.contactNo,
        ...req.body
    }
    const addAnswer = await protectedOperations.addNewQuery(queryMessage)
    if (addAnswer.affectedRows === 1) {
        res.json({msg : "Query successfully received !"})
    }
    else {
        res.json({msg : "Error query not received. Please try again !"})
    }
}
module.exports = {LoginRegisterCallback,saveContactMessage}