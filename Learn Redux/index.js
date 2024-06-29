const pipe = require('lodash/fp')

const input = "Kontolodon eats banana"
const trim = str => str.trim()
const wrap = type => str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()

const transform = pipe(wrap, toLowerCase, trim)
console.log(transform(input))
// const result = wrapInDiv(toLowerCase(trim(input)))