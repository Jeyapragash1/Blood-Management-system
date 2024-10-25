document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".dashboard-section");

    // Function to handle scroll event
    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Check if section is in view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add("fade-in"); // Add fade-in class
            }
        });
    };

    // Initial call to handle visibility on page load
    handleScroll();
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});
