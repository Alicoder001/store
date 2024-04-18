document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const notificationBar = document.querySelector(".notification-bar");
  const form = document.getElementById("form");
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const heroRight = document.getElementById("hero-right");
  const heroLeft = document.getElementById("hero-left");
  const modalBtn = document.getElementById("cancel");
  const heroBtn = document.getElementById("hero-btn");
  const formModal = document.getElementById("form-hero");
  // Sidebar toggle
  const toggleSidebar = (show) => {
    sidebar.classList.toggle("show", show);
    overlay.classList.toggle("show", show);
  };

  document
    .querySelector(".hamburger")
    .addEventListener("click", () => toggleSidebar(true));
  document
    .querySelector(".sidebarHamburger")
    .addEventListener("click", () => toggleSidebar(false));
  overlay.addEventListener("click", () => toggleSidebar(false));

  // Table toggle
  document.querySelector(".table-btn").addEventListener("click", (e) => {
    document.querySelector(".table").classList.toggle("hidden");

    if (table.classList.contains("hidden")) {
      document.querySelector(".table-wrap__text").target.innerHTML =
        "Показать еще";
    } else {
      document.querySelector(".table-wrap__text").innerHTML = "Скрыть таблицу";
    }
  });

  // Open modal
  heroRight.addEventListener("click", () => {
    modal.classList.remove("modal-hidden");
  });
  heroLeft.addEventListener("click", () => {
    modal.classList.remove("modal-hidden");
  });
  heroBtn.addEventListener("click", () => {
    modal.classList.remove("modal-hidden");
  });
  modalBtn.addEventListener("click", () => {
    modal.classList.add("modal-hidden");
  });
  modalOverlay.addEventListener("click", () => {
    modal.classList.add("modal-hidden");
  });
  // Close modal

  // Form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const number = document.getElementById("contact-number").value;
    const data = {
      firstname: name,
      from: "store__engineering",
      username: number,
    };

    try {
      document.getElementById("form-btn").innerHTML = "Loading...";
      const res = await postData(data);
      notificationBar.classList.add("show-bar");
      document.getElementById("form-btn").innerHTML = " Отправить запрос";
      if (res.msg_type === "success") {
        document.getElementById("not-text").innerHTML = res.msg;
        setTimeout(() => notificationBar.classList.remove("show-bar"), 5000);
        form.reset();
      }
    } catch (error) {
      document.getElementById("form-btn").innerHTML = " Отправить запрос";
      console.error("Error posting data", error);
    }
  });
  formModal.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const number = document.getElementById("contact-number").value;
    const data = {
      firstname: name,
      from: "store__engineering",
      username: number,
    };

    try {
      document.getElementById("form-modal-btn").innerHTML = "Loading...";
      const res = await postData(data);
      notificationBar.classList.add("show-bar");
      document.getElementById("form-modal-btn").innerHTML = " Отправить запрос";
      if (res.msg_type === "success") {
        document.getElementById("not-text").innerHTML = res.msg;
        setTimeout(() => notificationBar.classList.remove("show-bar"), 5000);
        form.reset();
        modal.classList.add("modal-hidden");
      }
    } catch (error) {
      document.getElementById("form-modal-btn").innerHTML = " Отправить запрос";
      console.error("Error posting data", error);
    }
  });

  // Helper function for POST request
  async function postData(data) {
    const response = await fetch("https://ssttoorree.ru/_receive_question_", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
});
