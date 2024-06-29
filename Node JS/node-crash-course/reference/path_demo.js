const path = require('path')

console.log(path.basename(__filename))
console.log(path.basename(__dirname))
console.log(path.parse(__dirname))
console.log(path.join(__dirname, 'test', 'index.html'))