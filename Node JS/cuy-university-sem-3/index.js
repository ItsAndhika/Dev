import express from 'express'
import bodyParser from 'body-parser'
import db from './db_config.js'
import response from './response.js'
import workersRouter from './routes/workers.js'
const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use('/workers', workersRouter)

app.get('/', (req, res) => {
    response(200, "API", "SUCCESS", res)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})