import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import url from 'url'
const app = express()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL(' . ', import.meta.url))
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressEjsLayouts)
app.use((req, res, next) => {
    console.log('Time : ' + Date.now())
    next()
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',        
        layout: 'templates/body',
        uri: req.url
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'templates/body',
        uri: req.url
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        layout: 'templates/body',
        uri: req.url
    })
})

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page not found',
        layout: 'templates/body',
        uri: req.url
    })
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})