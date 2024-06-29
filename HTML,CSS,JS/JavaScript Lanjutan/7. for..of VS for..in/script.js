// for..of
// Array
// const std = ["Reza", "Rijal", "Udin"]

// for(let i = 0; i < std.length; i++){
//     console.log(std[i]);
// }

// std.forEach(e => console.log(e))

// for(const e of std) {
//     console.log(e);
// }

// String
const name = "Lodontot"
// for(const n of name) {
//     console.log(n);
// }

// const std = ["Reza", "Rijal", "Udin"]
// std.forEach((e, i) => {
//     console.log(`${e} is a students ${i + 1}`)
// })

// for(const [i, e] of std.entries()) {
//     console.log(`${e} is a students ${i + 1}`)
// }

// NodeList
// const list = document.querySelectorAll(".name")
// console.log(list)
// for(l of list) {
//     console.log(l.innerHTML)
// }

// Arguments
// function plusNum() {
//     // return arguments.reduce((a, c) => a + c)
//     let amount = 0
//     for(a of arguments) {
//         amount += a
//     }
//     return amount
// }

// console.log(plusNum(1, 2, 3, 4, 5))

// for..in
const std = {
    name: "kontulodun",
    age: 17
}

for(s in std) {
    console.log(s)
    console.log(std[s])
}