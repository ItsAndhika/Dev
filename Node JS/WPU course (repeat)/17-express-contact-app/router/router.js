import express from 'express'
import { body, validationResult, check } from 'express-validator'
import { loadContact, findContact, addContact, editContact, deleteContact, checkDuplicateName } from '../utils/contacts.js'
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

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        layout: 'templates/body',
        uri: req.url,
        success: req.flash('success'),
        contacts: loadContact()
    })
})

router.get('/contact/:name', (req, res) => {
    res.render('details', {
        title: 'Contact Details',
        layout: 'templates/body',
        uri: '/contact',
        contact: findContact(req.params.name)
    })
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add Contact Data',
        layout: 'templates/body',
        uri: '/contact',
    })
})

router.get('/edit', (req, res) => {
    res.render('edit', {
        title: 'Edit Contact Data',
        layout: 'templates/body',
        uri: '/contact',
        contact: findContact(req.query.name)
    })
})

router.post('/add', [
    body('name').custom(name => {
        const duplicate = checkDuplicateName(name)
        if(duplicate) {
            throw new Error('Contact name is already exist, try another name!')
        }
        return true
    }),
    check('phoneNumber', 'Phone number is not valid!').isMobilePhone('id-ID'),
    check('email', 'Email is not valid!').isEmail()
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).render('add', {
            title: 'Add Contact Data',
            layout: 'templates/body',
            uri: '/contact',
            errors: errors.array()
        })
    } else {
        addContact(req.body)
        req.flash('success', 'Successfuly added new contact!')
        res.redirect('/contact')
    }
})

router.put('/edit', [
    body('name').custom(name => {
        const duplicate = checkDuplicateName(name)
        if(duplicate) {
            throw new Error('Contact name is already exist, try another name!')
        }
        return true
    }),
    check('phoneNumber', 'Phone number is not valid!').isMobilePhone('id-ID'),
    check('email', 'Email is not valid!').isEmail()
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).render('edit', {
            title: 'Edit Contact Data',
            layout: 'templates/body',
            uri: '/contact',
            contact: findContact(req.body.oldName),
            errors: errors.array()
        })
    } else {
        editContact(req.body)
        req.flash('success', 'Successfuly edited the contact!')
        res.redirect('/contact')
    }
})

router.delete('/delete', (req, res) => {
    deleteContact(req.body.name)
    req.flash('success', 'Successfuly deleted the contact!')
    res.redirect('/contact')
})

router.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page not found',
        layout: 'templates/body',
        uri: req.url
    })
})

export default router