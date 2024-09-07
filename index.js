const openNavigationButton = document.querySelector(".nav__open-button");
const closeNavigationButton = document.querySelector(".nav__close-button");
const navigationMenu = document.querySelector(".nav__menu");
const backdrop = document.querySelector(".backdrop");

openNavigationButton.addEventListener("click", () => {
  navigationMenu.classList.remove("nav__menu_hidden");
  backdrop.classList.remove("backdrop_hidden");
});

closeNavigationButton.addEventListener("click", () => {
  navigationMenu.classList.add("nav__menu_hidden");
  backdrop.classList.add("backdrop_hidden");
});
