const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to trigger the animation
            entry.target.classList.add('visible');
            // Optionally stop observing after the element has appeared
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

// Attach the observer to each fade-in and slide-up element
fadeIns.forEach(fadeIn => {
    appearOnScroll.observe(fadeIn);
});

slideUps.forEach(slideUp => {
    appearOnScroll.observe(slideUp);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});