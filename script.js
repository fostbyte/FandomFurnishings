// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Lucide icons
    lucide.createIcons();
    
    // Set up specific icons
    const iconElements = {
        'palette-icon': 'Palette',
        'instagram-icon': 'Instagram',
        'mobile-menu-icon': 'Menu',
        'mobile-instagram-icon': 'Instagram',
        'coffee-icon': 'Coffee',
        'flame-icon': 'Flame',
        'palette-icon-service': 'Palette',
        'brush-icon': 'Brush',
        'table-icon': 'Table2',
        'image-icon': 'Image',
        'arrow-right-icon': 'ArrowRight',
        'about-instagram-icon': 'Instagram',
        'mail-icon': 'Mail',
        'phone-icon': 'Phone',
        'contact-instagram-icon': 'Instagram',
        'clock-icon': 'Clock',
        'footer-palette-icon': 'Palette',
        'footer-instagram-icon': 'Instagram',
        'footer-facebook-icon': 'Facebook',
        'close-icon': 'X'
    };
    
    // Create icon elements
    Object.entries(iconElements).forEach(([elementId, iconName]) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = lucide.icons[iconName].toSvg({ size: 24 });
        }
    });
    
    // Special case for mobile menu icon
    updateMobileMenuIcon();
    
    // Initialize form submission handler
    initializeForm();
});

// Mobile menu functionality
let mobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('open');
    } else {
        mobileMenu.classList.remove('open');
    }
    
    updateMobileMenuIcon();
}

function updateMobileMenuIcon() {
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    if (mobileMenuIcon) {
        if (mobileMenuOpen) {
            mobileMenuIcon.innerHTML = lucide.icons.X.toSvg({ size: 24 });
        } else {
            mobileMenuIcon.innerHTML = lucide.icons.Menu.toSvg({ size: 24 });
        }
    }
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Gallery filtering functionality
let currentFilter = 'all';

function filterGallery(category) {
    currentFilter = category;
    
    // Update active button
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`[data-testid="gallery-filter-${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Filter gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Lightbox functionality
let lightboxOpen = false;

function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightbox.classList.add('open');
        lightboxOpen = true;
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('open');
        lightboxOpen = false;
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox on escape key or click outside
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
    }
});

// Close lightbox when clicking on overlay
document.addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Toast notification functionality
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastContent = document.getElementById('toast-content');
    
    if (toast && toastContent) {
        toastContent.textContent = message;
        toast.classList.add('show');
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }
}

// Form submission functionality
function initializeForm() {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('form-submit');
    
    if (form && submitButton) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            try {
                const formData = new FormData(form);
                
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    showToast('Quote request sent! We\'ll get back to you within 24 hours with a custom quote.');
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showToast('Error sending message. Please try again or contact us directly at hello@fandomfurnishings.com', 'error');
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = 'Send Quote Request';
            }
        });
    }
}

// Sticky header background on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'hsl(var(--card))';
            header.style.backdropFilter = 'none';
        }
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px)`;
    }
});

// Animation on scroll for service cards
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .gallery-item, .stat');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateOnScroll, 100);
});

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2024', currentYear);
    }
});

// Form validation enhancement
function validateForm() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'hsl(var(--destructive))';
            isValid = false;
        } else {
            input.style.borderColor = 'hsl(var(--border))';
        }
    });
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced form submission with validation
function initializeForm() {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('form-submit');
    const emailInput = document.getElementById('email');
    
    if (form && submitButton) {
        // Real-time email validation
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                if (this.value && !validateEmail(this.value)) {
                    this.style.borderColor = 'hsl(var(--destructive))';
                    showToast('Please enter a valid email address', 'error');
                } else {
                    this.style.borderColor = 'hsl(var(--border))';
                }
            });
        }
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateForm()) {
                showToast('Please fill in all required fields', 'error');
                return;
            }
            
            // Validate email specifically
            const email = emailInput.value;
            if (email && !validateEmail(email)) {
                showToast('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            try {
                const formData = new FormData(form);
                
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    showToast('Quote request sent! We\'ll get back to you within 24 hours with a custom quote.');
                    form.reset();
                    // Scroll to top of contact section
                    scrollToSection('contact');
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showToast('Error sending message. Please try again or contact us directly at hello@fandomfurnishings.com', 'error');
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = 'Send Quote Request';
            }
        });
    }
}

// Gallery lazy loading
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Header background change
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'hsl(var(--card))';
            header.style.backdropFilter = 'none';
        }
    }
    
    // Parallax effect
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);