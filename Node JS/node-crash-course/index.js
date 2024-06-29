class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    show() {
        console.log(`Hi, i am ${this.name} i am ${this.age} years old`)
    }
}
export default Person