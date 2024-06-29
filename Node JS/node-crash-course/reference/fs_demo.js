const fs = require('fs')
// fs.mkdir('./test', () => console.log('Dir created!'))
// fs.writeFile('./test/test.txt', 'Totlodon makan pisang', err => {
//     if(err) throw err
// })
const text = fs.readFile('./test/test.txt', (err, data)=> {
    if(err) throw err
    console.log(data.toString())
})