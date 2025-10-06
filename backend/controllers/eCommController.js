const bcrypt = require('bcrypt')
const Operations = require('../models/eCommModels.js')
async function registerNewUser (req,res,next) {
    // const password = 'Manan123'
    // const hash = await bcrypt.hash(password,10)
    // console.log("The hash is ",hash)
    //check if the user already exists in the database or not
    const exists = await Operations.checkUserExists(req.body)
    if(exists.length > 0) {
        res.json({msg:"User already exists in the database"})
    }
    else {
        const added = await Operations.addNewUser(req.body)
        if(added) {
            res.json({msg : "User Added Successfully"})
        }
        else {
            res.json({msg : "User could not be added due to some problem"})
        }
    }  
}

async function loginUser (req,res,next) {
    const answer = await Operations.findUserByUsername(req.body)
    console.log('answer is ',typeof(answer))
    if(answer) {
        const checkPassword = await bcrypt.compare(req.body.password,answer.password)
        checkPassword ? res.json({msg : "Username and password are correct"})
        : res.json({msg : "Password is incorrect"})        
    }
    else {
        res.json({msg : "User does not exist"})
    }
}
module.exports = {registerNewUser,loginUser}