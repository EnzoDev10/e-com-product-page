const toggleBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".nav-menu");


toggleBtn.addEventListener("click", () => {
  const menuIcon = toggleBtn.querySelector("img");
  if (menuIcon.src.endsWith("menu.svg")) {
    menuIcon.src = "images/icon-close.svg";
    menu.classList.add("active");
    overlay.classList.add("active");
  } else {
    menuIcon.src = "images/icon-menu.svg";
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }
});