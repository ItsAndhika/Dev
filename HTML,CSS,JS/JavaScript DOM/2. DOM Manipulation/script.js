// innerHTML
// const judul = document.getElementById("judul")
// judul.innerHTML = "Kintilidin"
// const sectionA = document.querySelector("section#a")
// sectionA.innerHTML = "Kocak sia anying"

// setAttribute()
// const judul = document.getElementById("judul")
// judul.setAttribute("class", "hello")

// classList
// const judul = document.getElementById("judul")

// Node Manipulation
const newP = document.createElement("p")
const pText = document.createTextNode("Paragraf Baru")
newP.appendChild(pText)
const sectionA = document.getElementById("a")
sectionA.appendChild(newP)

const newLi = document.createElement("li")
const liText = document.createTextNode("Item Baru")
newLi.appendChild(liText)
const ul = document.querySelector("section#b ul")
const li2 = document.querySelector("section#b ul li:nth-child(2)")
ul.insertBefore(newLi, li2)