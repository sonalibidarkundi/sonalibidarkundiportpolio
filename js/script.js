document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
const targetId = this.getAttribute("href");


    if (!targetId || targetId === "#") {
        return;
    }

    const target = document.querySelector(targetId);

    if (target) {
        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");


    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

document.addEventListener("click", event => {
    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


}

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
let current = "";


sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }
});

navigationLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
    }
});


}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
if (!header) {
return;
}


if (window.scrollY > 50) {
    header.style.boxShadow =
        "0 4px 20px rgba(0, 0, 0, 0.10)";
} else {
    header.style.boxShadow = "none";
}


});

const revealElements = document.querySelectorAll(
".hero, .about, .skills, .education, .experience, .projects, .achievements, .contact"
);

function reveal() {
const trigger = window.innerHeight - 120;


revealElements.forEach(element => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
        element.classList.add("show");
    }
});


}

window.addEventListener("scroll", reveal);

reveal();

const form = document.getElementById("contact-form");

if (form) {
form.addEventListener("submit", function (e) {
e.preventDefault();


    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid #dc3545";
        } else {
            input.style.border = "2px solid #b8860b";
        }
    });

    if (valid) {
        alert("Thank you! Your message has been received.");

        form.reset();

        inputs.forEach(input => {
            input.style.border = "1px solid #dedbd2";
        });
    }
});


}

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
topBtn.setAttribute("aria-label", "Back to top");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
if (window.scrollY > 500) {
topBtn.style.display = "flex";
topBtn.style.justifyContent = "center";
topBtn.style.alignItems = "center";
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

window.addEventListener("load", () => {
updateActiveNavigation();
reveal();
});
