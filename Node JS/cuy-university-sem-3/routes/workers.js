import express from 'express'
import db from '../db_config.js'
import response from '../response.js'
const router = express.Router()

router.get('/', (req, res) => {
    db.query(`SELECT * FROM workers`, (err, result) => {
        if(err) throw err
        response(200, result, 'I show this data', res)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db.query(`SELECT * FROM workers WHERE id = ${id}`, (err, result) => {
        if(err) throw err
        const data = response(200, result, "Get workers by id", res)
    })
})

export default router