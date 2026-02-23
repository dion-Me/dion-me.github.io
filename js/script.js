// =======================
// TYPING EFFECT
// =======================

const textArray = [
    "Application Developer",
    "Data Engineer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    const currentText = textArray[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

// ACTIVE MENU
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", typeEffect);

// =======================
// SIDEBAR TOGGLE
// =======================

// SIDEBAR SHOW / HIDE
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
}

// ============================
// PAGE FADE IN
// ============================
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".page-wrapper")
        .classList.add("show");
});

// ============================
// PAGE FADE OUT
// ============================
document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#") && !href.startsWith("http")) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.href;

            document.querySelector(".page-wrapper")
                .classList.remove("show");

            setTimeout(() => {
                window.location.href = target;
            }, 100);
        });
    }
});

