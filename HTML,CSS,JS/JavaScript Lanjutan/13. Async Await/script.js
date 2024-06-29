// const promise1 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("done")
//     }, 2000)
// })
// console.log(promise1)
// promise1
//     .then(response => console.log(response))

function promise() {
    return new Promise((resolve, reject) => {
        const time = 6000
        if(time < 5000) {
            setTimeout(() => {
                resolve("done")
            }, time)
        } else {
            reject("so long time")
        }
    })
}
// const promise1 = promise()
// promise1 
//     .then(response => console.log(response))
//     .catch(response => console.log(response))

async function callback() {
    try {
        const promise1 = await promise()
        console.log(promise1)
    } catch(err) {
        console.error(err)
    }
}

callback()