// Navbar toggle functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');


// Remove default shadow from navbar
navbar.style.boxShadow = 'none';


// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    if (window.innerWidth <= 768) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
});


// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navToggle.classList.remove('active');
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    }
});

    
// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.removeProperty('display');
    } else {
        navLinks.style.display = navToggle.classList.contains('active') ? 'flex' : 'none';
    }
});


// Navbar scroll shadow effect
let lastScroll = 0;


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;


    if (currentScroll > lastScroll && currentScroll > 0) {
        // Scrolling down
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        // Scrolling up or at top
        navbar.style.boxShadow = 'none';
    }


    lastScroll = currentScroll;
});


// Remove shadow when scrolling stops
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        navbar.style.boxShadow = 'none';
    }, 150);
});
