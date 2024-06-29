// function plusTimes(a, b) {
//     return [a + b, a * b]
// }

// const plus = plusTimes(5, 3)[0]
// const times = plusTimes(5, 3)[1]
// console.log(plus);
// console.log(times);

// const [plus, times] = plusTimes(5, 3)
// console.log(plus);

// function calculation(a, b) {
//     return {
//         plus: a + b,
//         minus: a - b,
//         times: a * b,
//         divid: a / b
//     }
// }

// const {plus, minus, times, divid} = calculation(5, 3)
// console.log(divid);

const std = {
    name: "kontuludon",
    age: 17,
    score: {
        task: 85,
        uts: 90,
        uas: 95
    }
}

// function printStd() {
//     return `Hello my name is ${std.name}, i am ${std.age} years old`
// }
// console.log(printStd());

function printStd({ name, age, score: { task, uts, uas } }) {
    return `Hello my name is ${name}, i am ${age} years old, and my uts score is ${uts}`
}

console.log(printStd(std));
