const heading = document.getElementById("heading");
const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];

const randNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
const randNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
img1.setAttribute("src", `images/dice${randNumber1}.png`);
img2.setAttribute("src", `images/dice${randNumber2}.png`);
if (randNumber1 > randNumber2) {
	heading.innerHTML = "Player 1 Wins 🚩";
}
if (randNumber1 < randNumber2) {
	heading.innerHTML = "Player 2 Wins 🚩";
}
if (randNumber1 === randNumber2) {
	heading.innerHTML = "Draw!";
}
