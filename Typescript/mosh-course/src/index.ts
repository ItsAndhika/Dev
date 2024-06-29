// console.log("Kintilidin")
// let age: number = 36
// if(age < 50)
//     age += 10
// console.log(age);
    
// Tuple
// const array: [string, number, boolean] = ['string', 1, true]
// array.push(2)
// console.log(array);

// Enum
// enum Size {Small = 1, Medium = 2, Large = "Large"}
// let mySize: Size = Size.Large
// console.log(mySize);

// Functions    
// function calculate(value: number): number {
//     return value + value
// }

// Objects 
// type Person = {
//     readonly id: number,
//     name: string,
//     retire?: (date: Date) => void
// }
// let person: Person = {
//     id: 1,
//     name: "Lodon",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

// Union Type
// function kgToLbs(weight: number | string): number {
//     if(typeof weight === "number")
//         return weight * 2.2
//     else 
//         return parseInt(weight) * 2.2
// }

// Intersection Type
type Add = {
    add: () => void
}

type Reduce = {
    reduce : () => void
}

type Mix = Add & Reduce

let define: Mix