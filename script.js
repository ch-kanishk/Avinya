function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show-menu");

  document.querySelector(".menu-btn").style.display =
    menu.classList.contains("show-menu") ? "none" : "block";
}