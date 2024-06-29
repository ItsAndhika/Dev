// const std = ["Kontulodun", "Reza", "Rijal"]
// console.log(...std)

// Joined 2 Arrays
// const students = ["Kontulodun", "Reza", "Rijal"]
// const lectures = ["Joko", "Budi", "Erik"]
// const people = students.concat(lectures)
// const people = [...students, "Ilyas", ...lectures]
// console.log(people)

// Array Copied
// const std = ["Kontulodun", "Reza", "Rijal"]
// const std1 = [...std]
// std1[0] = "Lodon"
// console.log(std)
// console.log(std1)

// const stdLi = document.querySelectorAll("ul li")
// for(const std of stdLi) {
//     console.log(std.textContent)
// }
// const std = [...stdLi]
// console.log(std)

const name = document.querySelector(".name")
const letters = [...name.textContent].map(l => `<span>${l}</span>`).join("")
console.log(letters)
name.innerHTML = letters