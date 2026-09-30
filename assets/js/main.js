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
    initFocusManagement();
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

    // Disclosure pattern: the closed menu is hidden via CSS visibility, which also
    // removes it from the accessibility tree, so no aria-hidden bookkeeping is needed.
    const setMenuOpen = (open, { restoreFocus = false } = {}) => {
        menuButton.setAttribute('aria-expanded', String(open));
        navMenu.classList.toggle('nav-open', open);

        if (open) {
            // Focus first link once the open transition has started
            setTimeout(() => {
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) firstLink.focus();
            }, 50);
        } else if (restoreFocus) {
            menuButton.focus();
        }
    };

    const isOpen = () => navMenu.classList.contains('nav-open');

    menuButton.addEventListener('click', () => setMenuOpen(!isOpen()));

    // Close menu when a link is clicked; focus moves to the target section
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen()) setMenuOpen(false);
        });
    });

    // Close on Escape key and return focus to the toggle
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) {
            setMenuOpen(false, { restoreFocus: true });
        }
    });

    // Close when keyboard focus leaves the menu and its toggle (non-modal: no focus trap)
    navMenu.addEventListener('focusout', (e) => {
        const next = e.relatedTarget;
        if (isOpen() && next && !navMenu.contains(next) && next !== menuButton) {
            setMenuOpen(false);
        }
    });
}

/**
 * Handle programmatic focus for navigation and hash links
 * Move focus to target heading when navigation links are clicked
 */
function initFocusManagement() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#' || targetId === '#main-content') return;

            const target = document.querySelector(targetId);
            if (target) {
                // Move focus without cancelling the smooth scroll to the target
                setTimeout(() => {
                    target.focus({ preventScroll: true });
                }, 10);
            }
        });
    });
}

/**
 * Initialize active navigation highlighting based on scroll position
 * Uses Intersection Observer API for performance-optimized scroll tracking
 */
function initActiveNavigationHighlight() {
    const headings = document.querySelectorAll('h2[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (headings.length === 0 || navLinks.length === 0) {
        console.warn('Headings or navigation links not found');
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px', // Adjust to trigger when heading is near top
        threshold: 0
    };

    /**
     * Callback for Intersection Observer
     * Updates active state of navigation links based on visible headings
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

    // Observe all headings that have IDs
    headings.forEach(heading => observer.observe(heading));
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
