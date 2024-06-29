// let worker: string = 'John'
// let age: number = 23
// let isWorking: boolean = true
// let talk: [string, string, boolean]
// talk = ["logon", 'idin', true]
// const friends: string = 'Johnny'
// console.log(worker, age, isWorking);
var person = "Budi";
function create(processor) {
    console.log("\n        Successfuly created your processor!\n        Processor specs :\n            brand = ".concat(processor.brand, ",\n            base model = ").concat(processor.baseModel, "\n            model name = ").concat(processor.modelName, "\n            clock speed = ").concat(processor.clockSpeed, "\n    "));
}
var intelCorei9 = {
    brand: "Intel",
    baseModel: "core i9",
    modelName: "i9-112345",
    clockSpeed: 8
};
create(intelCorei9);
