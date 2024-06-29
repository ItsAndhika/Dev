import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import './utils/db.js'
import Contact from './models/workers.js'
import {body, check, validationResult} from 'express-validator'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import flash from 'connect-flash'
import methodOverride from 'method-override'
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressEjsLayouts)
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.get('/', async (req, res) => {
    const workers = await Contact.find()

    res.render('index', {
        title: "Home",
        cssLink: "css/bootstrap.css",
        layout: "layouts/main",
        msg: req.flash('msg'),
        workers
    })
})

app.get('/add', (req, res) => {[
    res.render('add', {
        title: "Add Worker Data",
        cssLink: "../css/bootstrap.css",
        layout: "layouts/main",
    })
]})

app.get('/details/:id', async (req, res) => {
    const worker = await Contact.findOne({_id: req.params.id})

    res.render('details', {
        title: "Details",
        cssLink: "../../css/bootstrap.css",
        layout: "layouts/main",
        worker
    })
})

app.post('/', [
    body('name').custom( async (value) => {
        const duplicate = await Contact.findOne({name: value})
        if(duplicate) {
            throw new Error('Contact name is already exist, try another name!')
        }
        return true
    }),
    check('age', 'Age must be number').isNumeric(),
    check('email', 'Email is not valid!').isEmail()
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.render('add', {
            title: "Add Worker Data",
            cssLink: "../css/bootstrap.css",
            layout: "layouts/main",
            errors: errors.array()
        })
    } else {
        Contact.insertMany(req.body, (error, result) => {
            req.flash('msg', 'Contact data is successfuly added!')
            res.redirect('/')
        })
    }
})

app.delete('/', (req, res) => {
    Contact.deleteOne({_id: req.body._id}, (error, result) => {
        req.flash('msg', 'Contact data is successfuly deleted!')
        res.redirect('/')
    })
})

app.use('/', (req, res, next) => {{
    res.send(`<h1>404 PAGE NOT FOUND!</h1>`)
}})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})