/**
 * Main JavaScript for Shivani's Portfolio
 * Focus: Accessibility & Progressive Enhancement
 * 
 * Features:
 * - Mobile navigation toggle with ARIA support
 * - Active navigation highlighting based on scroll position
 * - Intersection Observer for performance-optimized scroll tracking
 */

/**
 * Initialize all interactive features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    initMobileNavigation();
    initActiveNavigationHighlight();
});

/**
 * Initialize mobile navigation toggle functionality
 * Manages mobile menu open/close state with proper ARIA attributes
 */
function initMobileNavigation() {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuButton || !navMenu) {
        console.warn('Mobile navigation elements not found');
        return;
    }

    const toggleMenu = (forceClose = false) => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        const newState = forceClose ? false : !isExpanded;

        menuButton.setAttribute('aria-expanded', newState);
        if (newState) {
            navMenu.classList.add('nav-open');
        } else {
            navMenu.classList.remove('nav-open');
        }
    };

    menuButton.addEventListener('click', () => toggleMenu());

    // Close menu when a link is clicked (crucial for mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-open')) {
                toggleMenu(true);
            }
        });
    });
}

/**
 * Initialize active navigation highlighting based on scroll position
 * Uses Intersection Observer API for performance-optimized scroll tracking
 */
function initActiveNavigationHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) {
        console.warn('Sections or navigation links not found');
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Section must be 30% visible to be considered active
    };

    /**
     * Callback for Intersection Observer
     * Updates active state of navigation links based on visible sections
     */
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.removeAttribute('aria-current');

                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        link.setAttribute('aria-current', 'page');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));
}
