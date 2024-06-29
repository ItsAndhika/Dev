const menu = document.getElementById('menu')
const ul = document.querySelector('nav ul')
menu.addEventListener('click', function() {
    menu.firstElementChild.classList.toggle('firstSpan')
    menu.firstElementChild.nextElementSibling.classList.toggle('secondSpan')
    menu.lastElementChild.classList.toggle('thirdSpan')
    ul.classList.toggle('show')
})