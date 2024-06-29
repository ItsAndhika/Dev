const menuToggle = document.getElementsByClassName('menu-toggle')[0]
const mobileMenu = document.getElementsByClassName('menu-list')[0]

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active')
    menuToggle.firstElementChild.classList.toggle('active')
    menuToggle.firstElementChild.nextElementSibling.classList.toggle('active')
    menuToggle.lastElementChild.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})