window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "blue";
    } else {
        navbar.style.backgroundColor = "#333";
    }
});