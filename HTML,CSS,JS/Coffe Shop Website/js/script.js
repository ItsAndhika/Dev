const menu = document.getElementById("menu-btn")
const cart = document.getElementById("cart-btn")
const search = document.getElementById("search-btn")
const nav = document.querySelector("header .navbar")
const cartItem = document.querySelector(".cart-items-container")
const searchForm = document.querySelector(".search-form")

menu.addEventListener("click", function() {
    nav.classList.toggle("show-nav")
})

cart.addEventListener("click", function() {
    cartItem.classList.toggle("show-cart")
})

search.addEventListener("click", function() {
    searchForm.classList.toggle("show-search")
})