// ===========================
// MODO OSCURO / CLARO
// ===========================
const body = document.body;
const toggle = document.getElementById('modo-toggle');
const icon = document.getElementById('icono-modo');
const logoImg = document.getElementById('logo-img');

// Cargar preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);
  updateIcon(savedTheme);
}

toggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  body.classList.remove('light', 'dark');
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  icon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
}

// ===========================
// HEADER SCROLL SHADOW
// ===========================
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('nav-drawer');

hamburger.addEventListener('click', () => {
  const isOpen = navDrawer.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Cerrar al hacer clic en enlace del drawer
document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', () => {
    navDrawer.classList.remove('open');
  });
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && !navDrawer.contains(e.target)) {
    navDrawer.classList.remove('open');
  }
});

// ===========================
// ANIMACIÓN SCROLL REVEAL
// ===========================
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar al cargar
document.querySelectorAll('.card, .section-header').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
  observer.observe(el);
});





