/**
 * Shivani Indoria: portfolio interactions
 * Progressive enhancement only; every destination works as a plain anchor link.
 *
 * - Directory disclosure on small screens
 * - Focus moves to the destination heading after in-page navigation
 * - "You are here" marker that follows the section in view
 * - Copy email address with a spoken confirmation
 */

document.addEventListener('DOMContentLoaded', () => {
    initDirectory();
    initInPageFocus();
    initYouAreHere();
    initCopyEmail();
    initHeaderOffset();
    updateCopyrightYear();
});

/**
 * Keep in-page anchors clear of the sticky header (WCAG 2.4.11), including
 * when enlarged text makes the header taller than its default height.
 */
function initHeaderOffset() {
    const header = document.querySelector('.site-header');
    if (!header || !('ResizeObserver' in window)) return;

    const root = document.documentElement;
    new ResizeObserver(([entry]) => {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? header.offsetHeight;
        root.style.scrollPaddingTop = `${Math.ceil(height) + 24}px`;
    }).observe(header);
}

/**
 * Directory disclosure (small screens). Non-modal: no focus trap; closes on
 * Escape, on choosing a destination, or when focus leaves the directory.
 */
function initDirectory() {
    const toggle = document.querySelector('.menu-toggle');
    const directory = document.getElementById('directory');
    if (!toggle || !directory) return;

    const isOpen = () => directory.classList.contains('is-open');

    const setOpen = (open, { restoreFocus = false } = {}) => {
        toggle.setAttribute('aria-expanded', String(open));
        directory.classList.toggle('is-open', open);
        if (!open && restoreFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => setOpen(!isOpen()));

    directory.addEventListener('click', (e) => {
        if (e.target.closest('a') && isOpen()) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) setOpen(false, { restoreFocus: true });
    });

    directory.addEventListener('focusout', (e) => {
        const next = e.relatedTarget;
        if (isOpen() && next && !directory.contains(next) && next !== toggle) setOpen(false);
    });
}

/**
 * After following an in-page link, move keyboard and screen-reader focus to
 * the destination's heading so reading continues from there.
 */
function initInPageFocus() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const id = link.getAttribute('href').slice(1);
        if (!id || id === 'main-content') return;

        const target = document.getElementById(id);
        if (!target) return;

        const focusTarget = target.matches('h1, h2, h3')
            ? target
            : target.querySelector('h1, h2, h3') || target;

        if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');

        // Let the smooth scroll run; focus without a second jump
        setTimeout(() => focusTarget.focus({ preventScroll: true }), 10);
    });
}

/**
 * "You are here": mark the directory link for the section crossing the
 * reading line, announce it as the current location, and glide the marker.
 */
function initYouAreHere() {
    const directory = document.getElementById('directory');
    const marker = directory && directory.querySelector('.here-marker');
    const links = directory ? [...directory.querySelectorAll('.directory-link')] : [];
    if (!links.length) return;

    const sections = links
        .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
        .filter(Boolean);

    // On arrival, the wordmark (the #top destination) is the current location
    const home = document.querySelector('.wordmark');
    const homeSection = home && document.getElementById(home.getAttribute('href').slice(1));

    let current = null;

    const placeMarker = () => {
        if (!marker) return;
        if (!current) {
            marker.style.opacity = '0';
            return;
        }
        const navBox = directory.getBoundingClientRect();
        const box = current.getBoundingClientRect();
        const x = box.left - navBox.left;
        marker.style.transform = `translateX(${x}px) scaleX(${box.width / 100})`;
        marker.style.opacity = '1';
    };

    const setCurrent = (id) => {
        const next = id ? links.find((l) => l.getAttribute('href') === `#${id}`) : null;
        if (next === current) return;
        links.forEach((l) => l.removeAttribute('aria-current'));
        if (next) next.setAttribute('aria-current', 'location');
        current = next || null;
        placeMarker();
    };

    // Which sections are crossing a reading line ~40% down the viewport
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target.id);
            else visible.delete(entry.target.id);
        });
        const inOrder = sections.filter((s) => visible.has(s.id));
        setCurrent(inOrder.length ? inOrder[inOrder.length - 1].id : null);

        const atHome = !inOrder.length && homeSection && visible.has(homeSection.id);
        if (home) {
            if (atHome) home.setAttribute('aria-current', 'location');
            else home.removeAttribute('aria-current');
        }
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach((s) => observer.observe(s));
    if (homeSection) observer.observe(homeSection);

    // Keep the marker aligned when the layout changes (resize, font load)
    window.addEventListener('resize', placeMarker);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeMarker);
}

/**
 * Copy the email address for visitors without a mail app.
 */
function initCopyEmail() {
    const button = document.querySelector('.copy-button');
    const status = document.querySelector('.copy-status');
    if (!button || !status) return;

    const address = button.dataset.copy;
    let timer;

    const announce = (message) => {
        status.textContent = message;
        clearTimeout(timer);
        timer = setTimeout(() => { status.textContent = ''; }, 5000);
    };

    button.addEventListener('click', async () => {
        try {
            if (!navigator.clipboard) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(address);
            announce('Email address copied.');
        } catch {
            announce(`Couldn’t copy automatically. The address is ${address}.`);
        }
    });
}

/**
 * Keep the footer year current.
 */
function updateCopyrightYear() {
    const el = document.getElementById('copyright');
    if (el) el.textContent = `© ${new Date().getFullYear()} Shivani Indoria`;
}
