document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initSmoothScroll();
    initBackToTop();
    initScrollAnimations();
    initDynamicTextDespre();
    initTypewriterHero();
    initNavbarScroll();
});

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 1500);
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function initDynamicTextDespre() {
    const dynamicTextElement = document.getElementById('dynamic-text');
    if (!dynamicTextElement) return;

    const phrases = ["Diferite produse", "HoReCa", "Branduri de haine"];
    let phraseIndexDespre = 0;
    let charIndexDespre = 0;
    let isDeletingDespre = false;

    function typeEffectDespre() {
        const currentPhrase = phrases[phraseIndexDespre];
        
        if (isDeletingDespre) {
            dynamicTextElement.textContent = currentPhrase.substring(0, charIndexDespre - 1);
            charIndexDespre--;
        } else {
            dynamicTextElement.textContent = currentPhrase.substring(0, charIndexDespre + 1);
            charIndexDespre++;
        }

        let typeSpeed = 100;

        if (isDeletingDespre) {
            typeSpeed /= 2;
        }

        if (!isDeletingDespre && charIndexDespre === currentPhrase.length) {
            typeSpeed = 1000; // Așteaptă 1 secundă
            isDeletingDespre = true;
        } else if (isDeletingDespre && charIndexDespre === 0) {
            isDeletingDespre = false;
            phraseIndexDespre = (phraseIndexDespre + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffectDespre, typeSpeed);
    }

    typeEffectDespre();
}

function initTypewriterHero() {
    const typeWriterElement = document.getElementById('typewriter-text');
    if (!typeWriterElement) return;

    const typeWriterPhrases = ["Proiectare vestimentară", "Producție", "Personalizare", "Blank-uri"];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = typeWriterPhrases[phraseIdx];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typeWriterElement.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIdx === currentPhrase.length) {
            typeSpeed = 1000; // Așteaptă 1 secundă
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % typeWriterPhrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
}

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
}
