// Synchronous Callback
// function hello(name) {
//     return alert(`Hello ${name}`)
// }

// function showName(callback) {
//     const name = prompt("What's your name?")
//     callback(name)
// }

// showName(hello)

// const students = [
//     {
//         "name": "Kontulodun",
//         "age": 17,
//         "major": "Teknik Informatika",
//         "id": 1
//     },
//     {
//         "name": "Reja",
//         "age": 19,
//         "major": "Teknik Komputer",
//         "id": 2
//     },
//     {
//         "name": "Rijal",
//         "age": 18,
//         "major": "Teknik Industri",
//         "id": 3
//     },

// ]

// students.forEach(n => console.log(n.name))

// Asynchronous Callback
// function getStudentsData(url, success, error) {
//     let xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response)
//             }
//         } else if(xhr.status === 404) {
//             error()
//         }
//     }

//     xhr.open("get", url)
//     xhr.send()
// }

// getStudentsData("students.json", results => {
//     const students = JSON.parse(results)
//     students.forEach(s => console.log(s.name))
// }, () => {})

// Jquery
$.ajax({
    url: "students.json",
    success: (std) => {
        console.log(std)
    },
    error: () => {

    }
})