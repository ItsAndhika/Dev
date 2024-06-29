const name = "Kintilidin"
const age = 17

function highlight(strings, ...params) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${params[i] || ''}</span>`, '')
}

const el = highlight`Hello my name is ${name} i am ${age} years old`
console.log(el);
document.body.innerHTML = el