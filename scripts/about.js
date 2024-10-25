// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function () {
    const fadeIns = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeIns.forEach(fadeIn => {
        appearOnScroll.observe(fadeIn);
    });
});
