import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = question => {
    return new Promise((resolve, reject) => {
        rl.question(question, result => resolve(result))
    })
}

const closeRl = () => {
    rl.close()
}

export {question, closeRl}