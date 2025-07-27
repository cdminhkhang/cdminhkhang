// ===== CƠ ĐIỆN MINH KHANG - MAIN JAVASCRIPT FILE =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScrolling();
    initContactButtons();
    initGalleryLightbox();
    initServiceCards();
    initLoadingAnimations();
    
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    // Hiển thị slide đầu tiên
    slides[currentSlide].classList.add('active');
  
    // Hàm chuyển slide
    function nextSlide() {
      // Ẩn slide hiện tại
      slides[currentSlide].classList.remove('active');
  
      // Tính toán slide tiếp theo
      currentSlide = (currentSlide + 1) % slides.length;
  
      // Hiển thị slide tiếp theo
      slides[currentSlide].classList.add('active');
    }
  
    // Thiết lập interval để chuyển slide sau mỗi 5 giây (ví dụ)
    setInterval(nextSlide, 5000);
});

// ===== HEADER FUNCTIONALITY =====
function initHeader() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    // Sticky header with glassmorphism effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glassmorphism');
        } else {
            header.classList.remove('glassmorphism');
        }
    });
}

// ===== MOBILE MENU FUNCTIONALITY =====
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Add animation class
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('mobile-menu-enter');
            setTimeout(() => {
                mobileMenu.classList.add('active');
            }, 10);
        } else {
            mobileMenu.classList.remove('mobile-menu-enter', 'active');
        }
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-enter', 'active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-enter', 'active');
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation delay for service cards
                if (entry.target.classList.contains('service-card')) {
                    const cards = document.querySelectorAll('.service-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== CONTACT BUTTONS =====
function initContactButtons() {
    // Phone number click tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Phone call initiated:', this.href);
        });
    });
    
    // Zalo link click tracking
    document.querySelectorAll('a[href*="zalo"]').forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Zalo link clicked:', this.href);
        });
    });
}

// ===== GALLERY LIGHTBOX =====
function initGalleryLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

function openLightbox(src, alt) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
    lightbox.innerHTML = `
        <div class="relative max-w-4xl max-h-full">
            <img src="${src}" alt="${alt}" class="max-w-full max-h-full object-contain">
            <button class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300" onclick="this.parentElement.parentElement.remove()">
                &times;
            </button>
        </div>
    `;
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.remove();
        }
    });
    
    document.body.appendChild(lightbox);
}

// ===== SERVICE CARDS INTERACTIONS =====
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click to expand details
        card.addEventListener('click', function() {
            // You can add modal or expand functionality here
            console.log('Service card clicked:', this.querySelector('h3').textContent);
        });
    });
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    // Add loading spinner to buttons
    document.querySelectorAll('a[href^="tel:"], a[href="#lien-he"]').forEach(button => {
        button.addEventListener('click', function() {
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading-spinner"></span> Đang xử lý...';
            this.disabled = true;
            
            // Reset after a short delay
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    // Handle scroll-based animations
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// ===== EXPORT FOR GLOBAL USE =====
window.CoDienMinhKhang = {
    initHeader,
    initMobileMenu,
    initScrollAnimations,
    initSmoothScrolling,
    initContactButtons,
    initGalleryLightbox,
    initServiceCards,
    initLoadingAnimations
};