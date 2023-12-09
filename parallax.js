document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("parallax-header");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Adjust the header position based on scroll position
        header.style.transform = `translateY(${scrollPosition}px)`;
    });
});
