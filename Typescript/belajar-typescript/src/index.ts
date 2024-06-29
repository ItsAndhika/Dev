// let worker: string = 'John'
// let age: number = 23
// let isWorking: boolean = true
// let talk: [string, string, boolean]
// talk = ["logon", 'idin', true]
// const friends: string = 'Johnny'
// console.log(worker, age, isWorking);

// type Friends = {
//     name: string
//     isKocak: boolean,
//     isNerd: boolean,
//     dept?: number
// }
// let friends: Friends
// friends = {
//     name: 'Lidin',
//     isKocak: true,
//     isNerd: false,
// }
// console.log(friends);

// function create(): string {
//     let num = 1233
//     return 'Created!'
// }
// console.log(create())

// const create2 = (): number => {
//     return 123
// }

// const space = (): void => {
//     const word = "This is nothing here dude! this is a void"
//     console.log(word)
// }
// space()

// const plus = (x: number, y: number): number => {
//     return x + y
// }
// console.log(plus(10, 30));

type Male = string
type Female = string
type isMale = boolean
type Gender = Male | Female | isMale
const person: Gender = "Budi"

interface Processor {
    brand: string,
    baseModel: string,
    modelName: string
    clockSpeed: number
}

function create(processor: Processor): void {
    console.log(`
        Successfuly created your processor!
        Processor specs :
            brand = ${processor.brand},
            base model = ${processor.baseModel}
            model name = ${processor.modelName}
            clock speed = ${processor.clockSpeed}
    `)
}
const intelCorei9 = {
    brand: "Intel",
    baseModel: "core i9",
    modelName: "i9-112345",
    clockSpeed: 8
}
create(intelCorei9)