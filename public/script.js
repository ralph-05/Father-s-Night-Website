// ==================== PARALLAX SCROLL EFFECT ====================
let scrollY = 0;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    updateParallax();
});

function updateParallax() {
    const topLeftElement = document.querySelector('.decorative-element.top-left');
    const bottomRightElement = document.querySelector('.decorative-element.bottom-right');

    if (topLeftElement && scrollY < window.innerHeight) {
        topLeftElement.style.transform = `translateY(${scrollY * 0.3}px)`;
    }

    if (bottomRightElement && scrollY < window.innerHeight) {
        bottomRightElement.style.transform = `translateY(${scrollY * -0.2}px)`;
    }
}

// ==================== SMOOTH SCROLL BEHAVIOR ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe highlight cards and gallery cards
document.querySelectorAll('.highlight-card, .gallery-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== GALLERY CARD HOVER EFFECTS ====================
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== HIGHLIGHT CARD INTERACTIVE EFFECTS ====================
document.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    });
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== MOBILE RESPONSIVE MENU BEHAVIOR ====================
function handleMobileView() {
    const isMobile = window.innerWidth <= 768;
    const galleryGrid = document.querySelector('.gallery-grid');
    const highlightsGrid = document.querySelector('.highlights-grid');

    if (isMobile) {
        if (galleryGrid) {
            galleryGrid.style.gridTemplateColumns = '1fr';
        }
        if (highlightsGrid) {
            highlightsGrid.style.gridTemplateColumns = '1fr';
        }
    }
}

window.addEventListener('resize', handleMobileView);
handleMobileView();

// ==================== SCROLL TO TOP BEHAVIOR ====================
let lastScrollTop = 0;
const header = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    lastScrollTop = window.scrollY;
    
    // Add subtle background change on scroll
    if (lastScrollTop > 100) {
        document.body.style.backgroundColor = 'var(--background)';
    } else {
        document.body.style.backgroundColor = 'var(--background)';
    }
});

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    // Press 'S' to scroll to the gallery section
    if (e.key === 's' || e.key === 'S') {
        const gallerySection = document.querySelector('.gallery-section');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Press 'T' to scroll to the top
    if (e.key === 't' || e.key === 'T') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ==================== DYNAMIC TEXT EFFECTS ====================
function typewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    type();
}

// ==================== FADE IN ELEMENTS ON LOAD ====================
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.section-title');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ==================== TOUCH DEVICE SUPPORT ====================
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
    document.querySelectorAll('.highlight-card, .gallery-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = isTouchDevice() ? 'scale(0.98)' : '';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log('%cFather\'s Night 2026', 'font-size: 24px; font-weight: bold; color: #a86f3f;');
console.log('%cCelebrating Fathers, Faith, and Family', 'font-size: 14px; color: #c1785e;');
console.log('%cJune 14, 2026 at 4:30 PM', 'font-size: 12px; color: #6b5a50;');
