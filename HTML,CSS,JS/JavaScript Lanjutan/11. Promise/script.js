// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response))
//         }
//     } else {
//         console.log(xhr.responseText)
//     }
// }
// xhr.open("get", "http://www.omdbapi.com/?apikey=9110497b&s=avengers")
// xhr.send()

// Fetch
// fetch("http://www.omdbapi.com/?apikey=9110497b&s=avengers")
//     .then(response => response.json())
//     .then(response => console.log(response))

// Promise
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// action (then / catch)

// const promise1 = new Promise((resolve, reject) => {
//     if(true) {
//         resolve("Promise is fulfilled")
//     } else {
//         reject("rejected")
//     }
// })

// console.log(promise1)
// promise1
//     .then(r => console.log(`OK : ${r}`))
//     .catch(r => console.log(`NOT OK : ${r}`))

// const promise2 = new Promise((resolve, reject) => {
//     if(true) {
//         setTimeout(() => {
//             resolve("fulfilled!")
//         }, 2000);
//     } else {
//         reject("rejected!")
//     }
// })
// console.log("start")
// promise2
//     .finally(() => console.log("Done"))
//     .then(r => console.log(`Allright : ${r}`))
//     .catch(r => console.log(`No : ${r}`))
// console.log("end")

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            name: "Kontolodon Reborn",
            actors: "Rijal, Reja"
        }])
    }, 1000);
})

const weather = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            city: "Bandung",
            temp: 25,
        }])
    }, 500);
})

Promise.all([film, weather])
    .then(r => {
        const [film, weather] = r
        console.log(film)
        console.log(weather)
    })