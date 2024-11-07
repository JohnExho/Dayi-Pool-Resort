document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const topImage = document.querySelector('#topImage');

    // Function to detect if the screen size is mobile (width <= 768px)
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Set the appropriate threshold for mobile or desktop
    const threshold = isMobile() ? 0.9 : 0.9; // 90% for mobile, 55% for desktop

    // Create an IntersectionObserver with the appropriate threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Visibility ratio:', entry.intersectionRatio); // Log visibility ratio

            const visibilityRatio = entry.intersectionRatio;

            // If the image is more visible than the threshold, hide the navbar
            if (visibilityRatio >= threshold) {
                navbar.style.opacity = 0; // Hide navbar
                navbar.style.transform = 'translateY(-20px)'; // Slide up
            } else {
                navbar.style.opacity = 1; // Show navbar
                navbar.style.transform = 'translateY(0)'; // Reset position
            }
        });
    }, { threshold: [0.9, 1.0] }); // Observer will trigger when between 30% and 100% of the image is visible

    // Observe the top image
    observer.observe(topImage);
});

