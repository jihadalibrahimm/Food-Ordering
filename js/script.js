const menu = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 20);
    }
  };
}
