document.addEventListener("DOMContentLoaded", (event) => {
    // Select the button using its ID
    const alertButton = document.getElementById("alertButton");

    // Add a click event listener to the button
    alertButton.addEventListener("click", () => {
        // Display an alert message when the button is clicked
        alert("Hello! This is a simple alert message.");
    });
});
