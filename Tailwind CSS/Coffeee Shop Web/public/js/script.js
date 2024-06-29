const bar = document.getElementById("search-btn")
const search = document.getElementById("search-form")
const cart = document.getElementById("cart")
const checkout = document.getElementById("checkout")
const hamburger = document.getElementById("hamburger")
const smNav = document.getElementById("sm-nav")

bar.addEventListener("click", () => search.classList.toggle("hidden"))

cart.addEventListener("click", () => checkout.classList.toggle("hidden"))

hamburger.addEventListener("click", () => smNav.classList.toggle("hidden"))