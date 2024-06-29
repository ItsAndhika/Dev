import express from 'express'
import url from 'url'
const app = express()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL(' . ', import.meta.url))
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('views/about.html', {root: __dirname})
})
app.get('/contact', (req, res) => {
    res.sendFile('views/contact.html', {root: __dirname})
})

app.get('/product', (req, res) => {
    res.send(`Product id : ${req.query.id}`)
})

app.use('/', (req, res) => {
    res.status(404).send("404 Page not Found!")
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})