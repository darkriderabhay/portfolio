// ===================================
// STYLE SWITCHER TOGGLE
// ===================================
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

// Close style switcher when scrolling
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// ===================================
// THEME COLOR SWITCHER
// ===================================
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    
    // Save selected theme to localStorage
    localStorage.setItem("selectedTheme", color);
}

// Load saved theme on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        setActiveStyle(savedTheme);
    }
});

// ===================================
// DAY/NIGHT MODE TOGGLE
// ===================================
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    
    // Save dark mode preference to localStorage
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
});

// Load dark mode preference on page load
window.addEventListener("load", () => {
    const isDark = localStorage.getItem("darkMode") === "true";
    
    if (isDark) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});