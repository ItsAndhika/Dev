import { db } from "./db_config.mjs";

const sql = `CREATE TABLE users
            (
                id int NOT NULL AUTO_INCREMENT,
                name VARCHAR(200),
                address VARCHAR(100),
                PRIMARY KEY (id)
            )`

db.query(sql, (err, result) => {
    if(err) throw err
    console.log('Table created!')
})