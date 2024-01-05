const menuOpen = document.querySelector(".menu-toggle");
const navbarOpen = document.querySelector(".navbar-menu");

menuOpen.addEventListener("click", function () {
  menuOpen.classList.toggle("bx-x");
  navbarOpen.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menuOpen.contains(e.target) && !navbarOpen.contains(e.target)) {
    navbarOpen.classList.remove("active");
    menuOpen.classList.remove("bx-x");
  }
});

const semuaMenu = document.querySelectorAll(".navbar-menu a");

semuaMenu.forEach((e) => {
  e.onclick = function () {
    navbarOpen.classList.remove("active");
    menuOpen.classList.remove("bx-x");
  };
});
