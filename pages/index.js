window.addEventListener('DOMContentLoaded', (event) => {
    const navButton = document.getElementById("navButton");
    const navbar = document.querySelector(".navbar");

    navButton.addEventListener("click", () => {
        navbar.classList.toggle("show"); /* toggle the 'open' class */
    });
});
