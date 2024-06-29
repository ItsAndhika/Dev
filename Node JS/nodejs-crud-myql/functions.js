import { db } from "./db_config.js";

function getAll() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM workers`, (err, result) => {
            if (err) throw err
            resolve(result)
        })
    })
}

function getById(id) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM workers WHERE id = ${id}`, (err, result) => {
            if(err) throw err
            resolve(result)
        })
    })
}

function query(query, values = []) {
    db.query(query, [values], (err, result) => {
        if (err) throw err
        console.log("Query success!")
    })
}

function addWorker(data) {
    const name = data.name
    const age = parseInt(data.age)
    const email = data.email
    const address = data.address
    const sql = `INSERT INTO workers VALUES(${null}, '${name}', '${age}', '${email}', '${address}')`
    db.query(sql, (err, result) => {
        if(err) throw err
        return result
    })
}

function editWorker(data) {
    const id = data.id
    const name = data.name
    const age = parseInt(data.age)
    const email = data.email
    const address = data.address
    const sql = `UPDATE workers SET
                 name = '${name}',
                 age = '${age}',
                 email = '${email}',
                 address = '${address}'
                 WHERE id = ${id}`
    db.query(sql, (err, result) => {
        if(err) throw err
        return result
    })
}

function deleteWorker(id) {
    const sql = `DELETE FROM workers WHERE id = ${id}`
    db.query(sql, (err, result) => {
        if(err) throw err
        return result.affectedRows
    })
}

export { getAll, getById, query, addWorker, editWorker, deleteWorker }