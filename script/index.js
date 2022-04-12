const menuToggle = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-right ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
