import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import {members} from './members.mjs'
const app = express()
const port = process.env.port || 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`)
    next()
}

app.use(logger)

app.get('/api/members', (req, res) => res.json(members))
// Set static folder
app.use(express.static('public'))

app.listen(port, () => console.log(`Server is listening to port ${port}`))