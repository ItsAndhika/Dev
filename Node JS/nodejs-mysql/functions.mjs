import { db } from "./db_config.mjs";

function getAll() {
    db.query(`SELECT * FROM users`, (err, result) => {
        if(err) throw err
        console.log(result)
    })
}

function query(query) {
    db.query(query, (err, result) => {
        if(err) throw err
        console.log("Query success!")
    })
}

export {query, getAll}