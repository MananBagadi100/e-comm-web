const netPool = require('../config/db.js')
async function getUserDetails (data) {
    const [queryAnswer] = await netPool.pool.query(`SELECT * FROM users WHERE username=?`,[data.username])
    return queryAnswer[0]
}

async function addNewQuery (data) {
    console.log('the query message is ',data)
    const [queryAnswer] = await netPool.pool.query(`INSERT INTO userQueries(user_id,username,email,contactNo,issueType,issueMessage) VALUES (?,?,?,?,?,?)`,
        [data.user_id,data.username,data.email,data.contactNo,data.issueType,data.issueMessage])
    return queryAnswer
}
module.exports = {getUserDetails,addNewQuery}