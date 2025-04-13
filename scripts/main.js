document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const logo = document.querySelector('.logo');
    const heroSection = document.querySelector('.hero');
    const originalText = logo.textContent;
    const altText = logo.getAttribute('data-alt-text');


    // Scroll event for logo text change
    window.addEventListener('scroll', () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
            logo.classList.add('scrolled');
        } else {
            logo.classList.remove('scrolled');
        }
    });
    // Project cards functionality
    projectCards.forEach(card => {
        const closeButton = card.querySelector('.close-button');
        const carousel = card.querySelector('.carousel-images');
        const dots = card.querySelectorAll('.carousel-dot');
        let currentSlide = 0;
        
        // Carousel functionality
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });

        // Auto-advance carousel
        let carouselInterval;
        function startCarousel() {
            carouselInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % dots.length;
                updateCarousel();
            }, 5000);
        }

        function stopCarousel() {
            clearInterval(carouselInterval);
        }
        
        card.addEventListener('click', (e) => {
            if (e.target === closeButton) return;
            
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            
            projectCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            
            card.classList.add('active');
            startCarousel();
        });

        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('active');
            
            // Restore scrolling
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            
            stopCarousel();
        });
    });

    
}); 