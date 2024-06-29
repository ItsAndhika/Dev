import { db } from "./db_config.mjs";

const sql = "CREATE DATABASE nodejs_mysql"
db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Database created!")
})