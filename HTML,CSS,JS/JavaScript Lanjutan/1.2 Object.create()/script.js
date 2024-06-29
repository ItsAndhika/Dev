// Object Literal
// let student1 = {
//     name: "Kintilidin",
//     age: 18,
//     energy: 10,
//     eat: function(porsion) {
//         this.energy = this.energy + porsion
//         console.log(`Hello ${this.name}, let's eat`);
//     }
// }

// let student2 = {
//     name: "Reza",
//     age: 17,
//     energy: 10,
//     eat: function(porsion) {
//         this.energy = this.energy + porsion
//         console.log(`Hello ${this.name}, let's eat`);
//     }
// }

// Function Declaration
const studentMethod = {
    eat: function(porsion) {
        this.energy += porsion
        console.log(`Hello ${this.name} having a good eat`);
    },

    sleep: function(hour) {
        this.energy += hour * 2
        console.log(`Hello ${this.name} having a good sleep`);
    },
    play: function(hour) {
        this.energy -= hour
        console.log(`Hello ${this.name} having a good play`);
    }
}

function Student(name, energy) {
    let student = Object.create(studentMethod)
    student.name = name
    student.energy = energy

    return student
}

let student1 = Student("Kintilidin", 10)
console.log(student1.energy);