import fs from 'fs'
import readline from 'readline'

if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data')
}
// fs.writeFileSync('./data/data.txt', 'Kontolodon makan pisang')
// fs.writeFile('./data/data.txt', 'This is asynchronous', err => {
//     if (err) throw err
// })

// console.log(fs.readFileSync('./data/data.txt', 'utf-8'))
// fs.readFile('./data/data.txt', 'utf-8', (err, data) => {
//     if(err) throw err
//     console.log(data)
// })

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('What is your name? : ', name => {
    rl.question('What is your phone number? : ', phoneNumber => {
        const file = JSON.parse(fs.readFileSync('data/contact.json', 'utf-8'))
        const data = {name, phoneNumber}
        file.push(data)
        fs.writeFileSync('data/contact.json', JSON.stringify(file, '', '    '))
        console.log(`Thank you ${name}`)
        rl.close()
    })
})