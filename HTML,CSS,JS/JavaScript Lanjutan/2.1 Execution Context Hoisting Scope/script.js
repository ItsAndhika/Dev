// const showName = function(name) {
//     return `Hello ${name}`
// }
// console.log(showName("Kontolodon"));

// const showName = name => `Hello ${name}`
// console.log(showName("Jeja"));

const students = ["Reza", "Rijal", "Lodon"]

// const wordLength = students.map(n => n.length)
// console.log(wordLength);

const info = students.map(n => ({
    name: n,
    wordLength: n.length
}))
console.table(info);