import express from 'express'
import { getAll, query, addWorker, getById, editWorker, deleteWorker } from '../functions.js'
const router = express.Router()

router.get('/', async (req, res) => {
    const workers = await getAll()
    res.render('workers', {
        workers, 
        title: 'Workers List Page',
        cssLink: '/css/bootstrap.css'
    })
})

router.get('/details', async (req, res) => {
    const id = req.query.id
    const worker = await getById(id)
    res.render('details', {
        worker,
        title: "Worker Details",
        cssLink: '../css/bootstrap.css'
    })
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add Data Page',
        cssLink: '../css/bootstrap.css'
    })
})

router.get('/edit', async (req, res) => {
    const id = req.query.id
    const worker = await getById(id)
    res.render('edit', {
        worker,
        title: "Edit Data Page",
        cssLink: '../css/bootstrap.css'
    })
})

router.get('/delete', (req, res) => {
    const id = req.query.id
    deleteWorker(id)
    res.redirect('/workers')
})

router.post('/add', (req, res) => {
    addWorker(req.body)
    res.redirect('/workers')
})

router.post('/edit', (req, res) => {
    editWorker(req.body)
    res.redirect('/workers')
})

export default router