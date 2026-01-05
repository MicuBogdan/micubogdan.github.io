document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavbarScroll();
    initScrollAnimations();
    initContactForm();
});

function initContactForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzq5u8pwtvUyqHEaUJ3q94c9rFhUAngFC7-o8ulCrHIBviJdJkCcstkVoOosZrZaAoxLQ/exec';
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            // 1. Verificare Honeypot (Anti-Spam)
            const honeypot = document.getElementById('website_check');
            if (honeypot && honeypot.value !== "") {
                console.log("Spam detectat.");
                return; // Oprește execuția, nu trimite nimic
            }

            // 2. Rate Limiting (Anti-Abuz - ex: 1 mesaj la 5 minute)
            const lastSubmission = localStorage.getItem('lastContactSubmission');
            const now = Date.now();
            if (lastSubmission && (now - lastSubmission < 60 * 1000)) {
                alert("Te rugăm să aștepți câteva minute înainte de a trimite un nou mesaj.");
                return;
            }

            if (btn) {
                btn.disabled = true;
                btn.innerText = "Se trimite...";
            }

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert("Mesaj trimis cu succes!");
                    // Salvăm momentul trimiterii cu succes
                    localStorage.setItem('lastContactSubmission', Date.now());
                    
                    if (btn) {
                        btn.disabled = false;
                        btn.innerText = "Trimite Mesajul";
                    }
                    form.reset();
                })
                .catch(error => {
                    alert("Eroare! Încearcă din nou.");
                    if (btn) {
                        btn.disabled = false;
                        btn.innerText = "Trimite Mesajul";
                    }
                });
        });
    }
}

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 1500);
    }
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