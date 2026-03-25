// ─── HEADER SCROLL ────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── MOBILE MENU ──────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// ─── REVEAL ON SCROLL ─────────────────────────
const revealEls = document.querySelectorAll(
  '.hero-text, .hero-visual, .about-left, .about-right, .section-head, .project-card, .skill-col, .tl-item, .contact-left, .contact-form'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ─── FORMULARIO MAILTO ────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre  = document.getElementById('nombre').value.trim();
    const email   = document.getElementById('email').value.trim();
    const asunto  = document.getElementById('asunto').value.trim() || 'Contacto desde portfolio';
    const mensaje = document.getElementById('mensaje').value.trim();
    const dest    = 'correo@email.com'; // ← TU CORREO

    const cuerpo = `Hola, soy ${nombre}.\n\n${mensaje}\n\nPuedes responderme a: ${email}`;
    window.location.href =
      `mailto:${dest}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Abriendo correo... ✓';
    setTimeout(() => { btn.textContent = 'Enviar mensaje →'; }, 3000);
  });
}
