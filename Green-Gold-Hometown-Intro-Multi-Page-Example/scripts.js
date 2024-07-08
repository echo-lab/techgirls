document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");

        // Clear the form
        document.getElementById("contactForm").reset();
    });
