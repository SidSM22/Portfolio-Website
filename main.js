var typed = new Typed(".text", {
    strings: ["Web Developer", "Ui/Ux Designer", "Musician"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Change 50 to the scroll threshold you prefer
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});