// Document loaded event
document.addEventListener("DOMContentLoaded", () => {
    loadOverview();
});

// Overview Data Loading
function loadOverview() {
    setTimeout(() => {
        document.getElementById("total-requests").textContent = "120"; // Example data
        document.getElementById("scheduled-donations").textContent = "85"; // Example data
        document.getElementById("stock-levels").textContent = "Sufficient"; // Example data
        
        // Add fade-in effect to cards
        document.querySelectorAll(".card").forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("fade-in");
            }, index * 300); // Staggered animation
        });
    }, 1000);
}

// Load Patient Requests
function loadPatientRequests() {
    const requestList = document.getElementById("patient-requests-list");
    requestList.innerHTML = "<p>Loading patient requests...</p>"; // Placeholder text

    setTimeout(() => {
        requestList.innerHTML = `<p>Patient 1 - Type A+</p><p>Patient 2 - Type B+</p>`;
        addFadeInEffect(requestList);
    }, 1000);
}

// Load Donation Schedules
function loadDonationSchedules() {
    const scheduleList = document.getElementById("donation-schedule-list");
    scheduleList.innerHTML = "<p>Loading donation schedules...</p>"; // Placeholder text

    setTimeout(() => {
        scheduleList.innerHTML = `<p>Donor 1 - Type A+ - 10:00 AM</p><p>Donor 2 - Type B+ - 11:00 AM</p>`;
        addFadeInEffect(scheduleList);
    }, 1000);
}

// Load Blood Stock
function loadBloodStock() {
    const stockList = document.getElementById("blood-stock-list");
    stockList.innerHTML = "<p>Loading blood stock levels...</p>"; // Placeholder text

    setTimeout(() => {
        stockList.innerHTML = `<p>Type A+: 10 units</p><p>Type B+: 8 units</p>`;
        addFadeInEffect(stockList);
    }, 1000);
}

// Function to add fade-in effect to dynamically loaded content
function addFadeInEffect(element) {
    element.classList.add("fade-in");
}

// Add visibility for buttons after loading
document.querySelectorAll("button").forEach((button) => {
    button.classList.add("fade-in");
    setTimeout(() => {
        button.classList.add("visible");
    }, 500); // Delay for button visibility
});

// Example function to load data and update the dashboard
async function loadDashboardData() {
    try {
        const [totalPatients, pendingRequests, scheduledAppointments] = await Promise.all([
            fetchTotalPatients(),
            fetchPendingRequests(),
            fetchScheduledAppointments()
        ]);

        document.getElementById('total-patients').innerText = totalPatients;
        document.getElementById('pending-requests').innerText = pendingRequests;
        document.getElementById('scheduled-appointments').innerText = scheduledAppointments;
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

// Example function to search patients
function searchPatients() {
    const input = document.getElementById('patient-search').value.toLowerCase();
    const patientList = document.getElementById('patient-list');
    const patients = patientList.getElementsByClassName('patient-item'); // Assuming each patient has this class

    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i];
        if (patient.innerText.toLowerCase().includes(input)) {
            patient.style.display = "";
        } else {
            patient.style.display = "none";
        }
    }
}

// Similar functions can be created for blood request searches
