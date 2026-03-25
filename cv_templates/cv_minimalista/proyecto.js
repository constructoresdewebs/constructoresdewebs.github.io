// 1. Obtener el parámetro ?id=#
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 2. Base de datos simple de proyectos
const proyectos = {
  1: {
    titulo: "Proyecto 1",
    descripcion: "Descripción completa del Proyecto 1. Explica el objetivo, tu rol, tecnologías y resultados.",
    link: "https://tusitio.com/proyecto1"
  },
  2: {
    titulo: "Proyecto 2",
    descripcion: "Descripción completa del Proyecto 2. Explica el objetivo, tu rol, tecnologías y resultados.",
    link: "https://tusitio.com/proyecto2"
  },
  3: {
    titulo: "Proyecto 3",
    descripcion: "Descripción completa del Proyecto 3. Explica el objetivo, tu rol, tecnologías y resultados.",
    link: "https://tusitio.com/proyecto3"
  }
};

// 3. Seleccionar el proyecto correcto
const proyecto = proyectos[id];

// 4. Insertar datos en la página
if (proyecto) {
  document.getElementById("titulo").textContent = proyecto.titulo;
  document.getElementById("descripcion").textContent = proyecto.descripcion;
  document.getElementById("link").href = proyecto.link;
} else {
  document.getElementById("titulo").textContent = "Proyecto no encontrado";
  document.getElementById("descripcion").textContent = "El ID no corresponde a ningún proyecto.";
  document.getElementById("link").style.display = "none";
}
