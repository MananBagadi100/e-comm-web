//Database pool (connections) and configrations live here
const mysql = require('mysql2/promise')
console.log('hi ', mysql)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})
module.exports = {pool}