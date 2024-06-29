const text = document.querySelector("p");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
let counter = 0;
text.textContent = counter;

const plus = () => {
	counter++;
	text.textContent = counter;
};
const minus = () => {
	counter--;
	text.textContent = counter;
};

plusButton.addEventListener("click", function () {
	plus();
});

minusButton.addEventListener("click", function () {
	minus();
});
