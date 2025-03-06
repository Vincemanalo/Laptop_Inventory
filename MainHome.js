document.addEventListener("DOMContentLoaded", function () {
  // Modal Elements
  const openModalBtn = document.getElementById("open-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const cancelModalBtn = document.getElementById("cancel-modal");
  const modalOverlay = document.querySelector(".popup-form");
  const fillupModal = document.querySelector(".fillup-form");
  const laptopForm = document.getElementById("laptop-form");
  const popupWrapper = document.querySelector(".popup-wrapper");

  function openModal() {
      if (fillupModal && modalOverlay && popupWrapper) {
          fillupModal.style.display = "block";
          modalOverlay.style.display = "flex";
          popupWrapper.style.display = "flex";
          document.body.style.overflow = "hidden";
          if (laptopForm) laptopForm.reset();
      }
  }

  function closeModal() {
      if (fillupModal && modalOverlay && popupWrapper) {
          fillupModal.style.display = "none";
          modalOverlay.style.display = "none";
          popupWrapper.style.display = "none";
          document.body.style.overflow = "";
      }
  }

  if (openModalBtn) openModalBtn.addEventListener("click", openModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

  if (modalOverlay) {
      modalOverlay.addEventListener("click", function (event) {
          if (event.target === modalOverlay) closeModal();
      });
  }

  // Dropdown Navigation
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const chevDown = document.getElementById("ChevDown");
  const chevUp = document.getElementById("ChevUp");

  if (dropdownToggle && dropdownMenu && chevDown && chevUp) {
      if (localStorage.getItem("dropdownOpen") === "true") {
          dropdownMenu.style.display = "block";
          chevDown.style.display = "none";
          chevUp.style.display = "inline";
      }

      dropdownToggle.addEventListener("click", function (event) {
          event.preventDefault();
          const isOpen = dropdownMenu.style.display === "block";
          dropdownMenu.style.display = isOpen ? "none" : "block";
          chevDown.style.display = isOpen ? "inline" : "none";
          chevUp.style.display = isOpen ? "none" : "inline";
          localStorage.setItem("dropdownOpen", !isOpen);
      });

      document.addEventListener("click", function (event) {
          if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
              dropdownMenu.style.display = "none";
              chevDown.style.display = "inline";
              chevUp.style.display = "none";
              localStorage.setItem("dropdownOpen", "false");
          }
      });
  }

  // Active Link Highlighting
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navoption a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
      }
  });

  // Edit Row Function
  window.editRow = function () {
      openModal();
  };
});
