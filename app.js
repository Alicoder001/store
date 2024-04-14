const hamburger = document.querySelector(".hamburger");
const sidebarHamburger = document.querySelector(".sidebarHamburger");
const overylay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
hamburger.addEventListener("click", () => {
  sidebar.classList.add("show");
  overylay.classList.add("show");
});
sidebarHamburger.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overylay.classList.remove("show");
});
overylay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overylay.classList.remove("show");
});
