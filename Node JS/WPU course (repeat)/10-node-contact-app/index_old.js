import fs from 'fs'
import { question, closeRl } from './functions.js'

const name = await question("What is your name? : ")
const phoneNumber = await question("What is your phone number? : ")
if (!fs.existsSync('./data/contact.json')) {
    fs.mkdirSync('./data')
    fs.writeFileSync('./data/contact.json', '[]');
}
const JSONFile = JSON.parse(fs.readFileSync('./data/contact.json', 'utf-8'))
const data = {name, phoneNumber}
JSONFile.push(data)
fs.writeFileSync('./data/contact.json', JSON.stringify(JSONFile, '', '  '))
console.log(`Thank you ${name}`)
closeRl()