const number = document.querySelector('.number')
let count = 0

function plus() {
	count++
	number.innerHTML = count
}

function minus() {
	count--
	number.innerHTML = count
}