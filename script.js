// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    // Listen for clicks on the hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close the mobile menu when any nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close the mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// 2. Scroll Animation (Intersection Observer)
const observerOptions = {
    root: null,
    threshold: 0.12, // Triggers when 12% of the element is visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // Add the visible class to trigger CSS transition
        entry.target.classList.add('visible');
        // Stop observing once it has faded in
        observer.unobserve(entry.target);
    });
}, observerOptions);

// Grab all elements with the 'fade-in' class and observe them
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});