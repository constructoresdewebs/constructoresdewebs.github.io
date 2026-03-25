// ─── HEADER SCROLL ────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
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
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
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
    const nombre   = document.getElementById('nombre').value.trim();
    const empresa  = document.getElementById('empresa').value.trim();
    const email    = document.getElementById('email').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensaje  = document.getElementById('mensaje').value.trim();
    const dest     = 'hola@nombreempresa.com'; // ← TU CORREO

    const asunto = `Solicitud de consulta — ${empresa || nombre}`;
    const cuerpo =
      `Nombre: ${nombre}\n` +
      `Empresa: ${empresa}\n` +
      `Servicio: ${servicio}\n\n` +
      `${mensaje}\n\n` +
      `Responder a: ${email}`;

    window.location.href =
      `mailto:${dest}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Solicitud enviada ✓';
    btn.style.background = '#2d8a4e';
    setTimeout(() => {
      btn.textContent = 'Enviar solicitud →';
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}
