// Sticky Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Intersection Observer for scroll animations (fade-in)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // optional: remove if you want it to trigger only once
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    faders.forEach(fader => {
        observer.observe(fader);
    });
    
    // trigger appear on hero immediately
    const heroContent = document.querySelector('#hero .fade-in');
    if(heroContent) heroContent.classList.add('appear');
    const heroImg = document.querySelector('#hero .hero-image');
    if(heroImg) setTimeout(() => heroImg.classList.add('appear'), 300);
});
