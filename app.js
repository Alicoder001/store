const hamburger = document.querySelector(".hamburger");
const table = document.querySelector(".table");
const tableBtn = document.querySelector(".table-btn");
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
tableBtn.addEventListener("click", () => {
  table.classList.toggle("hidden");
});
