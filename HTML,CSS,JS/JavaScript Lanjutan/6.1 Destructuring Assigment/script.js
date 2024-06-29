// const num = ["Hiji", "Dua", "Tilu"]

// const [first, ...entah] = num
// console.log(entah);

// Swap Items
// let a = 1
// let b = 2
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// const std = {
//     name: "Kontuludun",
//     age: 19
// }

// const {name, age} = std
// console.log(name);

// Assigment Wihtout Object Declaration
// ({name, age} = {name: "Kontuludun", age: 19})
// console.log(name);

// Rest Parameter
// const std = {
//     name: "Kontuludun",
//     age: 19
// }

// const {name, ...values} = std
// console.log(values);

// Function Parameter
const std = {
    id: 1,
    name: "Kontuludun",
    age: 19
}

function getId({ id }) {
    return id
}

console.log(getId(std));