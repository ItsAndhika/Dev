import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import router from './router/router.js'
import url from 'url'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import methodOverride from 'method-override'
const app = express()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL(' . ', import.meta.url))
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(expressEjsLayouts)
app.use(methodOverride('_method'))
app.use(cookieParser('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
app.use(router)


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})