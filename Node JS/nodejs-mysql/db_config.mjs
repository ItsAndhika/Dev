import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_mysql'
})

db.connect((err) => {
    if(err) throw err
    console.log('Connected!')
})

export {db}