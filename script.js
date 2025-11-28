document.addEventListener('DOMContentLoaded', () => {
    // --- Carousel Logic ---
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    let currentSlideIndex = 0;

    const moveToNextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    };
    setInterval(moveToNextSlide, 3000);


    // --- Floating Particles Logic ---
    const particlesContainer = document.getElementById('particles-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>`;

        // --- Heart Particle Colors ---
        const colors = [
            'rgba(249, 168, 212, 0.781)', // Pink/Fuchsia
            'rgba(167, 139, 250, 0.781)', // Purple
            'rgba(56, 189, 248, 0.781)'   // Sky Blue
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.color = randomColor;

        const size = Math.random() * 125 + 110;
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


    const openLetterBtn = document.getElementById('openLetterBtn');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const letterModal = document.getElementById('letterModal');
    const letterContent = letterModal.querySelector('div'); 

    
    function openLetter() {
        
        letterModal.classList.remove('opacity-0', 'pointer-events-none');
        
    
        letterContent.classList.remove('scale-90'); 
        
    
        document.body.style.overflow = 'hidden'; 
    }

    
    function closeLetter() {
        
        letterModal.classList.add('opacity-0', 'pointer-events-none');
        
        
        letterContent.classList.add('scale-90'); 
        
        
        document.body.style.overflow = ''; 
    }


    if (openLetterBtn) {
        openLetterBtn.addEventListener('click', openLetter);
    }
    
    if (closeLetterBtn) {
        closeLetterBtn.addEventListener('click', closeLetter);
    }

    
    if (letterModal) {
        letterModal.addEventListener('click', (event) => {
            
            if (event.target === letterModal) {
                closeLetter();
            }
        });
    }

    
    document.addEventListener('keydown', (event) => {
        
        const isModalOpen = letterModal && !letterModal.classList.contains('opacity-0');
        
        if (event.key === 'Escape' && isModalOpen) {
            closeLetter();
        }
    });

});