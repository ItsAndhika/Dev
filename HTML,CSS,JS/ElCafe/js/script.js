const toggleMenu = document.getElementById("toggle-menu");
const mobileNavbar = document.getElementsByClassName("navbar-nav")[0];

toggleMenu.addEventListener("click", function () {
	mobileNavbar.classList.toggle("active");
});

document.addEventListener("click", function (e) {
	if (!toggleMenu.contains(e.target) && !mobileNavbar.contains(e.target)) {
		mobileNavbar.classList.remove("active");
	}
});
