// ── Mobile menu toggle ──────────────────────────────────────
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close nav on scroll
window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Close nav when a link is clicked
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ── Active nav link on scroll ────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.navbar a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(
                `.navbar a[href="#${entry.target.id}"]`
            );
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// ── Typed.js ─────────────────────────────────────────────────
const typed = new Typed('.multiple-text', {
    strings: [
        'Frontend Developer',
        'UI/UX Designer',
        'MCA Graduate',
    ],
    typeSpeed:  80,
    backSpeed:  50,
    backDelay: 1200,
    loop: true,
});
