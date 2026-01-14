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
    updateCopyrightYear();
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

    // Initialize state: if mobile menu button is visible, set aria-hidden based on expanded state
    const isMobile = window.getComputedStyle(menuButton).display !== 'none';
    if (isMobile) {
        navMenu.setAttribute('aria-hidden', menuButton.getAttribute('aria-expanded') === 'false');
    }

    const toggleMenu = (forceClose = false) => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        const newState = forceClose ? false : !isExpanded;

        menuButton.setAttribute('aria-expanded', newState);
        navMenu.setAttribute('aria-hidden', !newState);

        if (newState) {
            navMenu.classList.add('nav-open');
            // Focus first link when opening
            setTimeout(() => {
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) firstLink.focus();
            }, 300); // Wait for transition
        } else {
            navMenu.classList.remove('nav-open');
            // Restore focus to button when closing
            menuButton.focus();
        }
    };

    menuButton.addEventListener('click', () => toggleMenu());

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-open')) {
                toggleMenu(true);
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('nav-open')) {
            toggleMenu(true);
        }
    });

    // Simple Focus Trap for Mobile Menu
    navMenu.addEventListener('keydown', (e) => {
        if (!navMenu.classList.contains('nav-open')) return;

        const focusableElements = navMenu.querySelectorAll('.nav-link');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
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
                        link.setAttribute('aria-current', 'location');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));
}

/**
 * Update copyright year automatically
 * Ensures the footer always shows the current year
 */
function updateCopyrightYear() {
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Shivani. Built with accessibility in mind.`;
    }
}
