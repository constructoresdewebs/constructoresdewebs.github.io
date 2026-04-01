// ─── CONSTANTES ───────────────────────────────
const TOTAL = 40;
const STORAGE_KEY = 'checklist-empleo-v1';

// ─── ESTADO ───────────────────────────────────
let state = loadState();

// ─── INIT ─────────────────────────────────────
function init() {
  const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
  checkboxes.forEach((cb, i) => {
    cb.checked = state[i] || false;
    cb.addEventListener('change', () => {
      state[i] = cb.checked;
      saveState();
      updateAll();
      if (cb.checked) animateCheck(cb);
    });
  });
  updateAll();
}

// ─── PERSISTENCIA ─────────────────────────────
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch { return {}; }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

// ─── UPDATE ───────────────────────────────────
function updateAll() {
  const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
  let totalDone = 0;

  // Por fase
  [1, 2, 3, 4, 5].forEach(f => {
    const faseCbs = document.querySelectorAll(`.task input[data-fase="${f}"]`);
    let done = 0;
    faseCbs.forEach(cb => { if (cb.checked) done++; });
    const total = faseCbs.length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    // Texto porcentaje
    const pctEl = document.querySelector(`.fase-pct[data-fase="${f}"]`);
    if (pctEl) pctEl.textContent = pct + '%';

    // Anillo SVG
    const ring = document.querySelector(`.ring-fill[data-fase="${f}"]`);
    if (ring) {
      const circumference = 2 * Math.PI * 15.9;
      const offset = circumference - (pct / 100) * circumference;
      ring.style.strokeDasharray = circumference;
      ring.style.strokeDashoffset = offset;
    }

    // Clase completada
    const faseEl = document.querySelector(`.fase[data-fase="${f}"]`);
    if (faseEl) faseEl.classList.toggle('completed', done === total && total > 0);

    totalDone += done;
  });

  // Global
  const pct = Math.round((totalDone / TOTAL) * 100);

  document.getElementById('gp-fill').style.width = pct + '%';
  document.getElementById('gp-pct').textContent = pct + '%';
  document.getElementById('progress-fill-mini').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${totalDone} de ${TOTAL} completados`;
  document.getElementById('done-count').textContent = totalDone;

  // Modal si 100%
  if (pct === 100) {
    setTimeout(() => {
      document.getElementById('modal-overlay').classList.add('show');
    }, 600);
  }
}

// ─── ANIMACIÓN CHECK ──────────────────────────
function animateCheck(cb) {
  const task = cb.closest('.task');
  task.style.transform = 'scale(1.01)';
  setTimeout(() => { task.style.transform = ''; }, 200);
}

// ─── RESET ────────────────────────────────────
document.getElementById('btn-reset').addEventListener('click', () => {
  if (!confirm('¿Seguro que quieres reiniciar todos los pasos?')) return;
  state = {};
  saveState();
  document.querySelectorAll('.task input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });
  updateAll();
});

// ─── EXPORT PDF ───────────────────────────────
document.getElementById('btn-export').addEventListener('click', () => {
  window.print();
});

// ─── MODAL CLOSE ──────────────────────────────
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-overlay').classList.remove('show');
});
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    document.getElementById('modal-overlay').classList.remove('show');
  }
});

// ─── START ────────────────────────────────────
init();
