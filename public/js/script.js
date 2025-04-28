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

// ANIMACION SKILLS


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

