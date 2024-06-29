window.onscroll = function() {
    const header = document.querySelector("header")
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed")
    } else {
        header.classList.remove("navbar-fixed")
    }
}

const bt = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

bt.addEventListener("click", function() {
    bt.classList.toggle("hamburger-active")
    navMenu.classList.toggle("hidden")
})