
// =============================
// INITIALISATION DES ICONES
// =============================

lucide.createIcons();


// =============================
// MENU MOBILE
// =============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();

});


// Fermer le menu après un clic

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


// =============================
// ANIMATIONS AU SCROLL
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


// =============================
// NAVIGATION ACTIVE
// =============================

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navigationLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${entry.target.id}`) {

                    link.classList.add("active");

                }

            });

        }

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {

    sectionObserver.observe(section);

});


// =============================
// ANNÉE AUTOMATIQUE
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// CONSOLE MESSAGE
// =============================

console.log(
    "%cWelcome to Hakim's Portfolio 🚀",
    "color: #7867ff; font-size: 18px; font-weight: bold;"
);
