import express from 'express'
import expressHandlebars from 'express-handlebars'
import cookieParser from 'cookie-parser'
import expressEjsLayouts from 'express-ejs-layouts'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from './models/User.js'
const app = express()
const PORT = 3000

mongoose.connect("mongodb://127.0.0.1:27017/login")
mongoose.set("strictQuery", true)

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home",
        layout: 'layouts/main'
    })
})

app.get('/register', async (req, res) => {
    res.render('register', {
        title: "Register",
        layout: 'layouts/main'
    })
})

app.get('/login', (req, res) => {
    res.render('login', {
        title: "Login",
        layout: 'layouts/main'
    })
})

app.get('/protected', (req, res) => {
    if(req.user) {
        res.render('protected', {
            title: "Protected",
            layout: 'layouts/main'
        })
    } else {
        res.redirect('/login')
    }
})

app.post('/register', async (req, res) => {
    const {username, email, password, password2} = req.body
    if(password === password2) {
        const duplicate = await User.findOne({username: username})
        if(duplicate) {
            res.redirect('/register')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        User.insertMany({
            username,
            email,
            password: hashedPassword
        })
        res.redirect('/login')
    } else {
        res.redirect('/register')
    }
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const exist = await User.findOne({password: password})
    if(exist) {
        const authToken = await bcrypt.
        res.redirect('/protected')
    }
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})