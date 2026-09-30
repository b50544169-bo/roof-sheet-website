
/* =====================================================
   ROOFPRO MAIN JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("show");
        }

    });

});


/* ================= PRODUCT FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const filterItems =
    document.querySelectorAll(".filter-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter =
            button.getAttribute("data-filter");


        /* Active button */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter products */

        filterItems.forEach(function (item) {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ================= CONTACT FORM ================= */

const enquiryForm =
    document.getElementById("enquiryForm");

const formMessage =
    document.getElementById("formMessage");


if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();


        if (!name || !phone) {

            formMessage.textContent =
                "Please enter your name and phone number.";

            formMessage.style.color = "#d63031";

            return;

        }


        /*
         * TEMPORARY FRONTEND RESPONSE
         *
         * Later this form will send the data to:
         *
         * Node.js backend
         *        ↓
         * MySQL database
         *
         */

        formMessage.textContent =
            "Thank you! Your enquiry has been received.";

        formMessage.style.color = "#27ae60";


        enquiryForm.reset();

    });

}


/* ================= PRODUCT FROM URL ================= */

const productSelect =
    document.getElementById("product");


if (productSelect) {

    const params =
        new URLSearchParams(window.location.search);

    const product =
        params.get("product");


    if (product) {

        const options =
            Array.from(productSelect.options);

        const matchingOption =
            options.find(function (option) {

                return option.text.trim() ===
                    product.trim();

            });


        if (matchingOption) {

            productSelect.value =
                matchingOption.value;

        }

    }

}


/* ================= CURRENT YEAR ================= */

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});

