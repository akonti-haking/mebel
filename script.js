document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    // Add event listener for menu toggle button
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'); // Toggle the class for hamburger icon
        menu.classList.toggle('active'); // Toggle the visibility of the menu
    });
});

    // 2. Smooth Scrolling to Sections
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1); // Get the target ID from href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Adjust scroll position slightly
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Card Hover Animation (Scale effect)
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)'; // Scale up on hover
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Reset scale on mouseout
        });

        // 4. Click on Card (Scale and Alert)
        card.addEventListener('click', function() {
            this.style.transition = 'transform 0.5s ease';
            this.style.transform = 'scale(1.1)'; // Scale up on click
            setTimeout(() => {
                alert(`You are viewing the product: ${this.querySelector('h3').textContent}`);
            }, 500); // Show alert after animation completes
        });
    });

    // 5. Button Click Animation (Redirect on button click)
    const buttons = document.querySelectorAll('.card button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Assuming each button has a custom 'data-link' attribute for redirection
            const card = this.closest('.card');
            card.style.transform = 'scale(1.1)'; // Apply scale animation
            setTimeout(() => {
                // Redirect to the URL specified in the data-link attribute
                const link = this.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            }, 300); // Wait for animation to complete before redirection
        });
    });
