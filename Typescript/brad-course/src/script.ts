let id: number = 1
let company: string = `Microsoft Corporation`
let isTrue: boolean = true
let a: any = `Anything`

let ids: number[] = [1,2,3,4,5]
let arrays: any[] = [1, `string`, true]

// Tuple
let person: [number, string, boolean] = [1, `Lodon`, true]
// Tuple Array
let customers: [number, string][]
customers = [
    [1, "Tommy"],
    [2, "Arthur"],
    [3, "John"]
]

// Union
let id2: string | number = 10

// Enum
enum Directions {
    Jakarta,
    Bandung,
    Semarang,
    Surabaya
}

// Objects
type User = {
    id: number,
    name: string,
    age: number
}
const users: User = {
    id: 2,
    name: "Totlodon",
    age: 23
}

// Type Assertion
let cid: any = 1
let customerId = cid

console.log("kintilidin")