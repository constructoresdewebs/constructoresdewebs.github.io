// ===========================
// PLANTILLAS DE TARJETAS
// ===========================

// Tarjeta normal (con imagen, botones Ver / Instrucciones / Descargar)
function createCard(p) {
  return `
    <div class="card">
      <div class="card-badge">${p.badge}</div>
      <div class="card-img-wrap">
        <img src="${p.imagen}" alt="${p.alt}" loading="lazy">
        <div class="card-overlay">
          <a class="btn-preview" href="${p.urlVer}" target="_blank">
            <i class="bi bi-eye"></i> Ver online
          </a>
        </div>
      </div>
      <div class="card-body">
        <h3>${p.titulo}</h3>
        <p class="card-desc">${p.descripcion}</p>
        <div class="card-actions">
          <a class="btn" href="${p.urlVer}" target="_blank">Ver online</a>
          ${p.urlInstrucciones ? `<a class="btn" href="${p.urlInstrucciones}" target="_blank" aria-label="Instrucciones (abre en PDF)">
           <i class="bi bi-file-earmark-pdf"></i> Instrucciones <span class="pdf-badge">PDF</span>
          </a>` : ''}
          <a class="btn-secondary" href="${p.urlDescargar}" download>
            <i class="bi bi-download"></i> Descargar
          </a>
        </div>
      </div>
    </div>`;
}

// Tarjeta "Próximamente" (sin imagen, con icono placeholder)
function createCardSoon(p) {
  return `
    <div class="card card-suggested">
      <div class="card-badge badge-new">Próximamente</div>
      <div class="card-img-wrap card-img-placeholder">
        <i class="bi ${p.icono} placeholder-icon"></i>
      </div>
      <div class="card-body">
        <h3>${p.titulo}</h3>
        <p class="card-desc">${p.descripcion}</p>
        <div class="card-actions">
          <a class="btn btn-disabled" href="#">Próximamente</a>
        </div>
      </div>
    </div>`;
}

// ===========================
// RENDERIZAR SECCIONES
// Llama a esta función después de cargar data.js
// ===========================
function renderSecciones() {
  const main = document.getElementById('main-content');

  secciones.forEach(seccion => {
    // Tarjetas de la sección
    const tarjetas = seccion.plantillas
      .map(p => p.proximamente ? createCardSoon(p) : createCard(p))
      .join('');

    const html = `
      <section id="${seccion.id}" class="${seccion.claseSeccion}">
        <div class="section-header">
          <span class="section-tag">${seccion.tag}</span>
          <h2>${seccion.titulo}</h2>
          <p>${seccion.descripcion}</p>
        </div>
        <div class="grid">
          ${tarjetas}
        </div>
      </section>`;

    main.insertAdjacentHTML('beforeend', html);
  });
}
