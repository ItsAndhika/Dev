import express from 'express'
import dotenv from 'dotenv'
import db from './config/database.js'
import User from './models/User.js'
import router from './routes/router.js'
dotenv.config()
const app = express()
const PORT = 3000

try {
    await db.authenticate()
    console.log('connected')
} catch (err) {
    console.error(err)
}

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})