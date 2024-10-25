// Scroll-triggered animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll("[data-animation]");
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add(element.getAttribute("data-animation"));
        }
    });
}

// Button click animation
function addButtonClickAnimations() {
    const buttons = document.querySelectorAll(".animated-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("pop-in");
            setTimeout(() => button.classList.remove("pop-in"), 300);
        });
    });
}

// Initialize animations
window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("DOMContentLoaded", () => {
    handleScrollAnimations(); // Run on page load
    addButtonClickAnimations(); // Button animations
});


// Function to handle active link on sidebar
function updateActiveLink() {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".sidebar-nav a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset for header height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === currentSection) {
            link.classList.add("active");
        }
    });
}

// Listen to scroll events to update the active link
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("DOMContentLoaded", updateActiveLink); // Run on page load

// Example function to search donors
function searchDonors() {
    const input = document.getElementById('donor-search').value.toLowerCase();
    const donorList = document.getElementById('donor-list');
    const donors = donorList.getElementsByClassName('donor-item'); // Assuming each donor has this class

    for (let i = 0; i < donors.length; i++) {
        const donor = donors[i];
        if (donor.innerText.toLowerCase().includes(input)) {
            donor.style.display = "";
        } else {
            donor.style.display = "none";
        }
    }
}

// Similar search functions can be created for requests and doctors
