
// ==========================================
// TASK 6 - JAVASCRIPT FEATURES
// ==========================================


// ==========================================
// FEATURE 1: DARK / LIGHT MODE
// ==========================================

// Selecting the dark mode button

const themeToggle = document.getElementById("themeToggle");

// Checking whether a theme was saved previously

const savedTheme = localStorage.getItem("dss-theme");

// Applying the saved theme when the page loads

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️ Light Mode";

}


// Changing the theme when the button is clicked

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Light Mode";

        localStorage.setItem("dss-theme", "dark");

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

        localStorage.setItem("dss-theme", "light");

    }

});



// ==========================================
// FEATURE 2: INTERACTIVE RESEARCH FILTER
// ==========================================

// Selecting all filter buttons

const filterButtons = document.querySelectorAll(".filter-btn");

// Selecting all research cards

const researchCards = document.querySelectorAll(".research-card");

// Selecting the filter status text

const filterStatus = document.getElementById("filterStatus");


// Adding click events to filter buttons

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Removing active class from all buttons

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        // Adding active class to selected button

        button.classList.add("active");

        // Getting selected category

        const selectedCategory = button.getAttribute("data-filter");

        let visibleCount = 0;


        // Checking every research card

        researchCards.forEach(function (card) {

            const cardCategory = card.getAttribute("data-category");


            // Showing all cards or matching category cards

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        // Updating the number of visible cards

        filterStatus.textContent =
            "Showing " + visibleCount + " research area(s).";

    });

});



// ==========================================
// FEATURE 3: SCROLL TO TOP BUTTON
// ==========================================

// Selecting the scroll button

const scrollTopBtn = document.getElementById("scrollTopBtn");


// Detecting when the user scrolls

window.addEventListener("scroll", function () {

    // Showing button after 300 pixels of scrolling

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


// Scrolling smoothly to the top when clicked

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
