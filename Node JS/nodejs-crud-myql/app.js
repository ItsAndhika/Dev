import express from 'express';
import bodyParser from 'body-parser'
import qs from 'querystring'
import workersRouter from './routes/workers.js'
// import workers from './data/workers.json' assert {type: 'json'}
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded())
app.use('/workers', workersRouter)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        cssLink: '/css/bootstrap.css'
    })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send(`<h1>404 NOT FOUND!</h1>`)
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})