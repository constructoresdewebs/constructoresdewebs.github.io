// ===========================
// DATOS DE LAS SECCIONES
// Edita aquí para añadir, quitar o modificar tarjetas.
// ===========================

const secciones = [
  {
    id: 'cv',
    tag: '01',
    titulo: 'Plantillas de CV',
    descripcion: 'Destaca sobre el resto con un currículum que impresione desde el primer vistazo.',
    claseSeccion: 'plantilla-section',
    plantillas: [
      {
        badge: 'Minimalista',
        imagen: 'assets/img/previews/cv_minimalista.webp',
        alt: 'CV Minimalista',
        titulo: 'CV Minimalista',
        descripcion: 'Diseño limpio y directo. Ideal para perfiles técnicos y creativos que quieren claridad. Con menú y sección de proyectos.',
        urlVer: 'cv_templates/cv_minimalista/index.html',
        urlInstrucciones: 'cv_templates/cv_minimalista/Instrucciones-CVMinimalista.pdf',
        urlDescargar: 'cv_templates/cv_minimalista/cv_minimalista.zip',
      },
      {
        badge: 'Moderno',
        imagen: 'assets/img/previews/cv_moderno.webp',
        alt: 'CV Moderno',
        titulo: 'CV Moderno',
        descripcion: 'Estructura dinámica con modo oscuro y modo claro. Perfecto para destacar habilidades y experiencia. Con opción de descargar el CV.',
        urlVer: 'cv_templates/cv_moderno/index.html',
        urlInstrucciones: 'cv_templates/cv_moderno/Instrucciones-CV-Moderno.pdf',
        urlDescargar: 'cv_templates/cv_moderno/cv_moderno.zip',
      },
      {
        proximamente: true,
        icono: 'bi-file-earmark-person',
        titulo: 'CV Creativo',
        descripcion: 'Para diseñadores y creativos. Usa tipografía expresiva y bloques de color para impactar.',
      },
    ],
  },

  {
    id: 'portfolio',
    tag: '02',
    titulo: 'Plantillas de Portfolio',
    descripcion: 'Muestra tus proyectos de forma profesional y atrae a clientes o reclutadores.',
    claseSeccion: 'plantilla-section alt-section',
    plantillas: [
      {
        badge: 'Simple',
        imagen: 'assets/img/previews/porfolio-simple.webp',
        alt: 'Portfolio Simple',
        titulo: 'Portfolio Simple',
        descripcion: 'Estructura sencilla y elegante. Funciona para cualquier disciplina profesional.',
        urlVer: 'porfolio_templates/porfolio_simple/index.html',
        urlInstrucciones: 'porfolio_templates/porfolio_simple/Instrucciones-Portfolio-Simple.pdf',
        urlDescargar: 'porfolio_templates/porfolio_simple/porfolio_simple.zip',
      },
      {
        badge: 'Creativo',
        imagen: 'assets/img/previews/porfolio_creativo.webp',
        alt: 'Portfolio Creativo',
        titulo: 'Portfolio Creativo',
        descripcion: 'Galería visualmente llamativa con hover effects. Para diseñadores y fotógrafos.',
        urlVer: 'porfolio_templates/porfolio_creativo/index.html',
        urlInstrucciones: 'porfolio_templates/porfolio_creativo/Instrucciones-Portfolio-Creativo.pdf',
        urlDescargar: 'porfolio_templates/porfolio_creativo/porfolio_creativo.zip',
      },
    ],
  },

  {
    id: 'landing',
    tag: '03',
    titulo: 'Landing Pages',
    descripcion: 'Páginas de captación optimizadas para convertir visitas en oportunidades.',
    claseSeccion: 'plantilla-section',
    plantillas: [
      {
        badge: 'Servicios',
        imagen: 'assets/img/previews/landing-servicios.webp',
        alt: 'Landing Page Servicios',
        titulo: 'Landing Page Servicios',
        descripcion: 'Estructura hero + propuesta de valor + CTA. Lista para adaptar a cualquier negocio.',
        urlVer: 'landing_pages/landing-servicios/index.html',
        urlInstrucciones: 'landing_pages/landing-servicios/Instrucciones-landing-servicios.pdf',
        urlDescargar: 'landing_pages/landing-servicios/landing-servicios.zip',
      },
      {
        proximamente: true,
        icono: 'bi-layout-text-window',
        titulo: 'Landing Page Freelance',
        descripcion: 'Diseñada específicamente para freelancers: presentación, servicios, testimonios y contacto.',
      },
    ],
  },

  {
    id: 'herramientas',
    tag: '04',
    titulo: 'Herramientas Útiles',
    descripcion: 'Recursos extra para potenciar tu búsqueda de empleo y presencia digital.',
    claseSeccion: 'plantilla-section alt-section',
    plantillas: [
      {
        badge: 'Nuevo Checklist',
        imagen: 'assets/img/previews/checklist.webp',
        alt: 'Checklist de Búsqueda',
        titulo: 'Checklist de Búsqueda',
        descripcion: 'Plantilla interactiva con los pasos esenciales para organizar tu búsqueda de empleo.',
        urlVer: 'checklist-empleo/index.html',
        urlInstrucciones: 'checklist-empleo/Instrucciones-checklist-empleo.pdf',
      },
      /*{
        proximamente: true,
        icono: 'bi-file-earmark-check',
        titulo: 'Checklist de Búsqueda',
        descripcion: 'Plantilla interactiva con los pasos esenciales para organizar tu búsqueda de empleo.',
      },*/
      {
        proximamente: true,
        icono: 'bi-envelope-paper',
        titulo: 'Carta de Presentación',
        descripcion: 'Plantillas de carta de presentación en HTML listas para personalizar y descargar.',
      },
    ],
  },

  {
    id: 'sobre-mi',
    tag: '05',
    titulo: 'Páginas Sobre mí',
    descripcion: 'Una página personal que conecta contigo antes de conocerte en persona.',
    claseSeccion: 'plantilla-section',
    plantillas: [
      {
        badge: 'Personal',
        imagen: 'assets/img/previews/sobre-mi-personal.webp',
        alt: 'Sobre mí personal',
        titulo: 'Sobre mí Personal',
        descripcion: 'Presentación cálida y directa. Incluye foto, bio, redes y enlace a CV o portfolio.',
        urlVer: 'sobre_mi/sobre-mi-personal/index.html',
        urlInstrucciones: 'sobre_mi/sobre-mi-personal/Instrucciones-Sobre-mi-personal.pdf',
        urlDescargar: 'sobre_mi/sobre-mi-personal/sobre-mi-personal.zip',
      },
    ],
  },
];
