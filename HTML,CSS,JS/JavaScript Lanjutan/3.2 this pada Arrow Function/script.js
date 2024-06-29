// const students = ["Reza", "Kintilidin", "Lodontod"]

// const info = students.map(n => ({
//     name: n,
//     wordLength: n.length
// }))
// console.log(info);

// const Students = function(name, age) {
//     this.name = name 
//     this.age = age
// }

// const std1 = new Students("Reja", 20)
// console.log(std1);

// Arrow Function
// Error
// const Students = function(name, age) {
//     console.log();
//     this.name = name 
//     this.age = age
// }

// const std1 = new Students("Reja", 20)
// console.log(std1);

const box = document.getElementsByClassName("box")[0]

box.addEventListener("click", function() {
    this.classList.toggle("size")
    setTimeout(() => {
        this.classList.toggle("caption")
    }, 600);
})