const addEventOnElement = function(elements, eventType, callback) {
    elements.forEach(element => {
        element.addEventListener(eventType, callback)
    })
}

// Navbar Toggle
const navbar = document.getElementsByClassName('navbar')[0]
const navToggleBtn = document.getElementsByClassName('nav-open-btn')[0]
const overlay = document.getElementsByClassName('overlay')[0]

addEventOnElement([navToggleBtn, overlay], 'click', function() {
    navbar.classList.toggle('active')
    navToggleBtn.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
})

// Parallax effect
const parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'))
window.addEventListener('mousemove', e => {
    parallaxElements.map(parallaxElement => {
        const movementX = e.clientX / window.innerWidth * Number(parallaxElement.dataset.parallaxSpeed)
        const movementY = e.clientY / window.innerHeight * Number(parallaxElement.dataset.parallaxSpeed)
        parallaxElement.animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, {
            duration: 500, fill: "forwards"
        })
    })
})