import express from 'express'
import { body, validationResult, check } from 'express-validator'
import '../utils/database.js'
import { Contact } from '../models/Contact.js'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import auth from '../middleware/auth.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',        
        layout: 'templates/body',
        uri: req.url
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'templates/body',
        uri: req.url
    })
})

router.get('/contact', auth, async (req, res) => {
    const contacts = await Contact.find()

    res.render('contact', {
        title: 'Contact',
        layout: 'templates/body',
        uri: req.url,
        success: req.flash('success'),
        contacts
    })
})

router.get('/contact/:id', async (req, res) => {
    const contact = await Contact.findOne({_id: req.params.id})
    res.render('details', {
        title: 'Contact Details',
        layout: 'templates/body',
        uri: '/contact',
        contact
    })
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add Contact Data',
        layout: 'templates/body',
        uri: '/contact',
    })
})

router.get('/edit', async (req, res) => {
    res.render('edit', {
        title: 'Edit Contact Data',
        layout: 'templates/body',
        uri: '/contact',
        contact: await Contact.findOne({_id: req.query.id})
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'User Registration',
        layout: 'templates/body',
        uri: req.url
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'User Login',
        layout: 'templates/body',
        uri: req.url
    })
})

router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt()
    req.body.password = await bcrypt.hash(req.body.password, salt)
    const user = User.insertMany(req.body).then((err, result) => {
        console.log('Success')
        res.status(200).json({user})
    }).catch(err => {
        console.error(err)
    })
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user) {
        res.status(401).json({error: "Email not found!"})
        return false
    }
    const suitPassword = await bcrypt.compare(req.body.password, user.password)
    if(!suitPassword) {
        res.status(401).json({error: "Password is not suit!"})
        return false
    }
    const token = await jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET)
    res.status(200).json({msg: "Success!", user, access_token: token})
})

router.post('/add', [
    check('phoneNumber', 'Phone number is not valid!').isMobilePhone('id-ID'),
    check('email', 'Email is not valid!').isEmail()
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).render('add', {
            title: 'Add Contact Data',
            layout: 'templates/body',
            uri: '/contact',
            errors: errors.array()
        })
    } else {
        Contact.insertMany(req.body).then((err, result) => {
            req.flash('success', 'Successfuly added new contact!')
            res.redirect('/contact')
        }).catch(err => {
            console.log(err)
        })
    }
})

router.put('/edit', [
    check('phoneNumber', 'Phone number is not valid!').isMobilePhone('id-ID'),
    check('email', 'Email is not valid!').isEmail()
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).render('edit', {
            title: 'Edit Contact Data',
            layout: 'templates/body',
            uri: '/contact',
            contact: req.body,
            errors: errors.array()
        })
    } else {
        Contact.updateOne({_id: req.body.id}, {$set: {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        }}).then((err, result) => {
            req.flash('success', 'Successfuly edited the contact!')
            res.redirect('/contact')
        }).catch(err => {
            console.log(err)
        })
    }
})

router.delete('/delete', (req, res) => {
    Contact.deleteOne({_id: req.body.id}).then((err, result) => {
        req.flash('success', 'Successfuly deleted the contact!')
        res.redirect('/contact')
    }).catch(err => {
        console.log(err)
    })
})

router.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page not found',
        layout: 'templates/body',
        uri: req.url
    })
})

export default router