var hambur = document.querySelector(".hamburger")
var navmenu = document.querySelector(".menu")
hambur.addEventListener("click", () => {
    hambur.classList.toggle("active");
    navmenu.classList.toggle("active");
})