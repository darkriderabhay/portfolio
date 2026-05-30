// ===================================
// TYPED.JS - Typing Animation
// ===================================
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js for typing animation
    const typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Web Designer", "Student", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// ===================================
// NAVIGATION - Scroll Spy
// ===================================
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav li a");
    const sections = document.querySelectorAll("section");

    // Set home as active on page load
    function setActiveLink(sectionId) {
        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active");
            }
        });
    }

    // Set home as active initially
    setActiveLink("home");

    // ScrollSpy: Highlight active section in navigation
    window.addEventListener("scroll", function () {
        let currentSection = "home"; // Default to home
        let scrollPosition = window.scrollY + 100; // Add offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        setActiveLink(currentSection);
    });

    // Click event: Make clicked link active immediately
    links.forEach(link => {
        link.addEventListener("click", function () {
            const targetId = this.getAttribute("href").substring(1);
            setActiveLink(targetId);
        });
    });
});


// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}

// Close navigation when clicking on a link (mobile)
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 1200) {
            aside.classList.remove("open");
            navTogglerBtn.classList.remove("open");
        }
    });
});

// ===================================
// CONTACT FORM - FORMSPREE
// ===================================
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            // Let Formspree handle the submission naturally
            // No preventDefault needed!
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = "Sending...";
                submitBtn.disabled = true;
            }
        });
    }
});