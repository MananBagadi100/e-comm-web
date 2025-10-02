require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const whiteList = ['http://localhost:5173'] //enter allowed url's
let corsOptions = {
    origin: function(origin,callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null,true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.options('/',cors()) //preflight requests

app.use(express.json())
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get('/students' , async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT id, name, class, stream, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS created_at FROM students")
        res.json(rows)
    }
    catch(error) {
        console.log('Error ',error)
        res.status(500).json({error: 'Failed to fetch students'})
    }
})
//here
const StudentRoutes = require('./Routes/studentRoutes.js')
app.use('/studentsDatabase', StudentRoutes.router)


app.post('/',cors(corsOptions),(req,res,next) => {
    console.log("hey i received this req from react frontend",req.body)
    res.json({ msg : "I am fine (server)"})
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost: ${process.env.PORT}`)
})

module.exports = {express}
