
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("open"));
    });
  }

  document.querySelectorAll(".nav-drop > button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        btn.parentElement.classList.toggle("open");
      }
    });
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("open");
    });
  });

  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card[data-category]");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      products.forEach(card => {
        const show = category === "all" || card.dataset.category === category;
        card.style.display = show ? "" : "none";
      });
    });
  });

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
