// Typing Animation

const typingText = document.getElementById("typing");

const words = [
    "Backend Developer",
    "Java Developer",
    "Spring Boot Developer",
    "REST API Developer",
    "Microservices Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();


// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Reveal Animation

const revealElements = document.querySelectorAll(
    ".card, .project-card, .timeline-card, .skills span"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();