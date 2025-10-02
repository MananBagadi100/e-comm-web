const netConnection = require('../config/db.js')
async function getStudentData() {
    const queryAnswer = await netConnection.pool.query(`SELECT * FROM students`)
    return queryAnswer
}
async function addStudentData(body) {
    const queryAnswer = await netConnection.pool.query(`INSERT INTO students(name,class,stream) VALUES(?,?,?);`,[body.name,body.class,body.stream])
    return queryAnswer
}
async function editStudentData(body,id) {
    const queryAnswer = await netConnection.pool.query(`UPDATE students SET name=?, class=?, stream=? WHERE id=${id}`,[body.name,body.class,body.stream])
    return queryAnswer
}
async function deleteStudentData(id) {
    const queryAnswer = await netConnection.pool.query(`DELETE FROM students WHERE id=${id}`)
    return queryAnswer
}
module.exports = {getStudentData,addStudentData,editStudentData,deleteStudentData}