document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    // Toggle Navigation Menu
    menuIcon.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
        menuIcon.classList.toggle('open');
    });

    // Rotating Text Logic
    const rotatingText = ["Front-End Designer", "Python Programmer", "B.Tech CSE Graduate"];
    let currentIndex = 0;
    const span = document.querySelector(".hero span");

    if (span) {
        function updateText() {
            span.textContent = rotatingText[currentIndex];
            currentIndex = (currentIndex + 1) % rotatingText.length;
        }
        setInterval(updateText, 2000);
        updateText(); // Initialize text immediately
    }
});
