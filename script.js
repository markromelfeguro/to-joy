document.addEventListener('DOMContentLoaded', () => {
    // --- Carousel ---
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    let currentSlideIndex = 0;

    const moveToNextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    };
    setInterval(moveToNextSlide, 3000);


    // --- Floating Particles ---
    const particlesContainer = document.getElementById('particles-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>`;

        const size = Math.random() * 75 + 60;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        heart.style.left = Math.random() * 100 + 'vw';

        const duration = Math.random() * 7 + 5;
        heart.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    setInterval(createHeart, 400);
});