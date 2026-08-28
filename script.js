// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Listen for clicks on the hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close the mobile menu when any link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 2. Scroll Animation (Intersection Observer)
// This watches elements as you scroll and adds the 'visible' class when they appear
const observerOptions = {
    root: null,
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // Add the visible class to trigger the CSS transition
        entry.target.classList.add('visible');
        
        // Stop observing once it has faded in
        observer.unobserve(entry.target);
    });
}, observerOptions);

// Grab all elements with the 'fade-in' class and observe them
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});