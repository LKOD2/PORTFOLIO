// MENU

document.getElementById("menu-icon").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

// CARGA DEL TEMA

document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("dark-mode") === "true"){
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});

// DARK MODE

document.getElementById("tema").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    document.body.classList.remove("colorful");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

// COLORFUL MODE

document.getElementById("tema-colores").addEventListener("click", function() {
    document.body.classList.toggle("colorful");
    document.body.classList.remove("dark");
    if(document.body.classList.contains("colorful")){
        localStorage.setItem("colorful-mode", "true");
    } else {
        localStorage.setItem("colorful-mode", "false");
    }
});

// ANIMACIONES

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = scrollY;

    document.querySelectorAll('.project-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            const distanceFromCenter = (rect.top + rect.height / 2) - windowHeight / 2;
            const normalizedDistance = distanceFromCenter / (windowHeight / 1); // -1 a 1

            let scale = 1 - Math.abs(normalizedDistance) * 0.2;
            let translateY = normalizedDistance * 20;

            if (direction === 'down') {
                scale += 0.02;
            } else {
                scale -= 0.02;
            }

            card.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }
    });
});




// ---


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                //observer.unobserve(entry.target); // Solo una vez
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
});

