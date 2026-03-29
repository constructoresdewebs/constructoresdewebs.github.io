// 1. Obtener el parámetro ?id=#
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 2. Base de datos simple de proyectos
const proyectos = {
  1: {
    titulo: "Proyecto 1",
    descripcion: "Descripción completa del Proyecto 1. Explica qué es el proyecto, qué problema resuelve o qué objetivo tiene, para quién esta pensado.",
    objetivo:"¿Qué buscabas aprender o demostrar?",
    rol: "Si fue en equipo: ¿qué parte hiciste tú?, ¿cómo colaboraste y qué aportaste al grupo?",
    caracteristicas: "Características principales del proyecto",
    resultado: "¿Qué aprendiste, qué mejoras ....?",
    desarrollo:"¿Cómo planteaste el proyecto?, problemas que encontaste, ¿cómo lo resolviste?...",
    tecnologias: [
      { nombre: "HTML", icono: "bi bi-filetype-html" }, //puedes usar los iconos buscando en https://icons.getbootstrap.com/
      { nombre: "CSS", icono: "bi bi-filetype-css" },
      { nombre: "JavaScript", icono: "bi bi-filetype-js" },
      { nombre: "Figma", icono: "bi bi-palette" },
      { nombre: "UX/UI", icono: "bi bi-vector-pen" }
    ],
    link: "https://tusitio.com/proyecto1"
  },
  2: {
    titulo: "Proyecto 2",
    descripcion: "Descripción completa del Proyecto 1. Explica qué es el proyecto, qué problema resuelve o qué objetivo tiene, para quién esta pensado.",
    objetivo:"¿Qué buscabas aprender o demostrar?",
    rol: "Si fue en equipo: ¿qué parte hiciste tú?, ¿cómo colaboraste y qué aportaste al grupo?",
    caracteristicas: "Características principales del proyecto",
    resultado: "¿Qué aprendiste, qué mejoras ....?",
    desarrollo:"¿Cómo planteaste el proyecto?, problemas que encontaste, ¿cómo lo resolviste?...",
    tecnologias: [
      { nombre: "HTML", icono: "bi bi-filetype-html" }, //puedes usar los iconos buscando en https://icons.getbootstrap.com/
      { nombre: "CSS", icono: "bi bi-filetype-css" },
      { nombre: "JavaScript", icono: "bi bi-filetype-js" },
      { nombre: "Figma", icono: "bi bi-palette" },
      { nombre: "UX/UI", icono: "bi bi-vector-pen" }
    ],
    link: "https://tusitio.com/proyecto2"
  },
  3: {
    titulo: "Proyecto 3",
    descripcion: "Descripción completa del Proyecto 1. Explica qué es el proyecto, qué problema resuelve o qué objetivo tiene, para quién esta pensado.",
    objetivo:"¿Qué buscabas aprender o demostrar?",
    rol: "Si fue en equipo: ¿qué parte hiciste tú?, ¿cómo colaboraste y qué aportaste al grupo?",
    caracteristicas: "Características principales del proyecto",
    resultado: "¿Qué aprendiste, qué mejoras ....?",
    desarrollo:"¿Cómo planteaste el proyecto?, problemas que encontaste, ¿cómo lo resolviste?...",
    tecnologias: [
      { nombre: "HTML", icono: "bi bi-filetype-html" }, //puedes usar los iconos buscando en https://icons.getbootstrap.com/
      { nombre: "CSS", icono: "bi bi-filetype-css" },
      { nombre: "JavaScript", icono: "bi bi-filetype-js" },
      { nombre: "Figma", icono: "bi bi-palette" },
      { nombre: "UX/UI", icono: "bi bi-vector-pen" }
    ],
    link: "https://tusitio.com/proyecto3"
  }
};

// 3. Seleccionar el proyecto correcto
const proyecto = proyectos[id];

// 4. Insertar datos en la página
if (proyecto) {
  document.getElementById("titulo").textContent = proyecto.titulo;
  document.getElementById("descripcion").textContent = proyecto.descripcion;
  document.getElementById("objetivo").textContent = proyecto.objetivo;
  document.getElementById("rol").textContent = proyecto.rol;
  document.getElementById("caracteristicas").textContent = proyecto.caracteristicas;
  document.getElementById("desarrollo").textContent = proyecto.desarrollo;
  document.getElementById("resultado").textContent = proyecto.resultado;

  const listaTecnologias = document.getElementById("tecnologias");
  listaTecnologias.innerHTML = "";

  if (proyecto.tecnologias) {
    proyecto.tecnologias.forEach(tec => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="${tec.icono}"></i> ${tec.nombre}`;
      listaTecnologias.appendChild(li);
    });
  } else {
    listaTecnologias.textContent = "No hay tecnologías registradas.";
  }
  
  document.getElementById("link").href = proyecto.link;
} else {
  document.getElementById("titulo").textContent = "Proyecto no encontrado";
  document.getElementById("descripcion").textContent = "El ID no corresponde a ningún proyecto.";
  document.getElementById("objetivo").textContent = "No hay ningún objetivo en el proyecto";
  document.getElementById("rol").textContent = "No hay ningún rol definido en el proyecto";
  document.getElementById("tecnologias").textContent = "No hay ningún tecnología en la lista";
  document.getElementById("caracteristicas").textContent = "No hay ninguna característica definida";
  document.getElementById("desarrollo").textContent = "No hay ninguna descripción del desarrollo del proyecto";
  document.getElementById("resultado").textContent = "No hay ninguna descripción del resultado";
  document.getElementById("link").style.display = "none";
}
