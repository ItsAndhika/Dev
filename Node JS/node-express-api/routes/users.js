import express from 'express'
import {v4 as uuidv4} from 'uuid'
const router = express.Router()

let users = [

]

router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})


router.post('/', (req, res) => {
    const user = req.body
    users.push({id: uuidv4(), ...user})
    res.send(`User with the name ${user.name} was added`)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const filterId = users.find(user => user.id === id) 
    console.log(filterId)
    res.send(filterId)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    
    users = users.filter(user => user.id !== id)
    res.send(`User with id ${id} was deleted`)
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const selectUser = users.find(user => user.id === id)
    selectUser.name = "Kontolodon"
    res.send(`User with id ${id} was updated`)
})

export default router