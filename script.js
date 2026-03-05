document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuIcon && navMenu) {
        const icon = menuIcon.querySelector('i');

        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            if(navMenu.classList.contains('show-menu')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Scroll Animation Logic (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stops observing once it has animated in
            }
        });
    }, observerOptions);

    // Apply observer to all elements with the .fade-up class
    document.querySelectorAll('.fade-up').forEach((el) => {
        observer.observe(el);
    });
});
