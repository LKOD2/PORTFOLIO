// menu

document.getElementById("menu-icon").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

// DARK MODE
document.getElementById("tema").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("dark-mode") === "true"){
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-content');
    aboutSection.classList.add('animate');
});


document.getElementById("colores").addEventListener("click", function() {
    document.body.classList.toggle("colorful");
    if(document.body.classList.contains("colorful")){
        localStorage.setItem("colorful-mode", "true");
    } else {
        localStorage.setItem("colorful-mode", "false");
    }
});