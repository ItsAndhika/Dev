"use strict";
// let worker: string = 'John'
// let age: number = 23
// let isWorking: boolean = true
// let talk: [string, string, boolean]
// talk = ["logon", 'idin', true]
// const friends: string = 'Johnny'
// console.log(worker, age, isWorking);
const person = "Budi";
function create(processor) {
    console.log(`
        Successfuly created your processor!
        Processor specs :
            brand = ${processor.brand},
            base model = ${processor.baseModel}
            model name = ${processor.modelName}
            clock speed = ${processor.clockSpeed}
    `);
}
const intelCorei9 = {
    brand: "Intel",
    baseModel: "core i9",
    modelName: "i9-112345",
    clockSpeed: 8
};
create(intelCorei9);
//# sourceMappingURL=index.js.map