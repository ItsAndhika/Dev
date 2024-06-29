// function init() {
//     let name = "Joko"
//     function showName() {
//         console.log(name);
//     }
//     console.dir(showName)
// }
// init()

// function init() {
//     let name = "Reza"
//     return function() {
//         console.log(name);
//     }
// }

// let showName = init()
// showName()

function sayHello(time) {
    return function(name) {
        console.log(`Hello ${name}, good ${time}`);
    }
}

let goodMorning = sayHello("morning")
goodMorning("Kontolodon")