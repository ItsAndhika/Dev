const btn = document.querySelector("#toggle")
const html = document.getElementsByTagName("html")[0]
btn.addEventListener("click", function() {
    html.classList.toggle("dark")
})