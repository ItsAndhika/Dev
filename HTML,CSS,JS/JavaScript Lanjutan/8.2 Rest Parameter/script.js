// function myFunc(...args) {
//     return args
// }
// console.log(myFunc(1, 2, 3, 4, 5))

// function plus(...nums) {
//     return nums.reduce((n, c) => n + c)
// }
// console.log(plus(5, 3 ,7, 9, 5))

// const group = ["Lodontot", "Reja", "Rijal", "Udin", "Budi"]
// const [leader, vice, ...teams] = group
// console.log(teams)

// const team = {
//     pm: "Lodontot",
//     frontEnd1: "Reja",
//     frontEnd2: "Rijal",
//     backEnd: "Udin",
//     devOps: "Budi"
// }

// const {pm, ...myTeam} = team
// console.log(myTeam)

function filterBy(type, ...args) {
    return args.filter(a => typeof a === type)
}

console.log(filterBy("boolean", 1, 2, "Lodon", 3.5, true))