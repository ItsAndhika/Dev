const preloader = document.getElementsByClassName('preload')[0]

window.addEventListener('load', function() {
    preloader.classList.add('loaded')
    document.body.classList.add('loaded')
})