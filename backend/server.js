require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {verifyToken} = require('./Middleware/verifyToken.js')
const whiteList = ['http://localhost:5173'] //enter allowed url's
let corsOptions = {
    origin: function(origin,callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null,true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials:true
}
//Middleware to parse and read cookie data
const cookieParser = require('cookie-parser')
app.use(cookieParser())
//Middleware to allow frontend requests
app.use(cors(corsOptions))
//Middleware to parse json format
app.use(express.json())

app.get('/favicon.ico', (req, res) => res.status(204).end());

const eCommRoutes = require('./Routes/e-commRoutes.js')

app.use('/',eCommRoutes.router)

//all protected routes come below
app.use('/auth',verifyToken, (req,res,next) => {
    res.json({msg : "Token correct and verified. Access Granted !",isLoggedIn:true})
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost: ${process.env.PORT}`)
})

module.exports = {express}
