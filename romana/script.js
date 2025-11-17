// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(tabId) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        const activeContent = document.getElementById(tabId);

        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
            
            // Scroll to top of content smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            
            // Save active tab to localStorage
            localStorage.setItem('activeTab', tabId);
        });
    });

    // Check if there's a saved active tab in localStorage
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        switchTab(savedTab);
    }

    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Add keyboard navigation for tabs
    document.addEventListener('keydown', function(e) {
        const activeTab = document.querySelector('.tab-btn.active');
        const tabsArray = Array.from(tabButtons);
        const currentIndex = tabsArray.indexOf(activeTab);

        // Left arrow - previous tab
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            const prevTab = tabsArray[currentIndex - 1];
            prevTab.click();
        }

        // Right arrow - next tab
        if (e.key === 'ArrowRight' && currentIndex < tabsArray.length - 1) {
            const nextTab = tabsArray[currentIndex + 1];
            nextTab.click();
        }
    });

    // Add hover effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click animation to tags
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Console message
    console.log('%c📚 Studiu de Caz - Biserica și Literatura Religioasă Românească', 
                'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cNavigare: Folosește tastele săgeată stânga/dreapta pentru a naviga prin taburi', 
                'color: #764ba2; font-size: 12px;');
});

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);