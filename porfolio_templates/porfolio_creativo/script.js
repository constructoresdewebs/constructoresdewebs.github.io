/* =============================================
   PORTFOLIO CREATIVO — SCRIPT
   ============================================= */

// ─── CURSOR PERSONALIZADO ──────────────────────
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Hover effect en enlaces y botones
const hoverTargets = document.querySelectorAll('a, button, .gallery-item, .project-img, .tag, .service-item');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ─── HEADER SCROLL ────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── MOBILE MENU ─────────────────────────────
const menuBtn  = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// ─── SCROLL A PROYECTOS ───────────────────────
document.getElementById('btn-scroll').addEventListener('click', () => {
  document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
});

// ─── REVEAL ON SCROLL ────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ─── STAGGER REVEAL EN GRIDS ─────────────────
const staggerGroups = [
  '.projects-grid',
  '.gallery-grid',
  '.services-grid',
  '.skills-right',
];
staggerGroups.forEach(selector => {
  const parent = document.querySelector(selector);
  if (!parent) return;
  const children = parent.querySelectorAll('.reveal');
  children.forEach((child, i) => {
    child.style.transitionDelay = (i * 0.08) + 's';
  });
});

// ─── FORMULARIO ──────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre  = document.getElementById('nombre').value.trim();
    const email   = document.getElementById('email').value.trim();
    const asunto  = document.getElementById('asunto').value.trim() || 'Contacto desde portfolio';
    const mensaje = document.getElementById('mensaje').value.trim();

    const destinatario = 'correo@email.com'; // ← TU CORREO AQUÍ

    const cuerpo = `Hola, me llamo ${nombre} y te escribo desde tu portfolio.

Mensaje:
${mensaje}

Puedes responderme a: ${email}`;

    const mailtoLink =
      `mailto:${destinatario}` +
      `?subject=${encodeURIComponent(asunto)}` +
      `&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailtoLink;

    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Abriendo correo... ✓';
    setTimeout(() => { btn.textContent = 'Enviar mensaje →'; }, 3000);
  });
}

// ─── PARALLAX SUAVE EN HERO ──────────────────
const heroCircles = document.querySelectorAll('.hero-circle');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  heroCircles.forEach((c, i) => {
    const speed = [0.15, 0.08, 0.12][i] || 0.1;
    c.style.transform = `translateY(${y * speed}px)`;
  });
});

// ─── COUNTER ANIMADO EN STATS ────────────────
function animateCount(el, target, duration = 1200) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }
  }, 16);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(num => {
        const target = parseInt(num.textContent);
        animateCount(num, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.about-stats');
if (statsEl) statsObserver.observe(statsEl);
