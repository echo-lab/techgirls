const title = document.getElementById("title");

title.style.color = "#976391"; // Initial color

window.onload = function () {
    title.style.color = "#712f79"; // Animate to a new color on load
    // You can add a transition style here for smoother animation
    title.style.transition = "color 1s ease-in-out";
};
