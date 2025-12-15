const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const htmlEl = document.documentElement; // La etiqueta <html>

// Define la clave que usarás en localStorage
const STORAGE_KEY = "color-theme";

// --- Lógica de carga inicial ---
// Comprueba si el usuario ya tiene una preferencia guardada o si prefiere el modo oscuro por sistema.
const savedTheme = localStorage.getItem(STORAGE_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  // Si ya está en oscuro o el sistema lo prefiere, añade la clase 'dark' y muestra el icono de sol
  htmlEl.classList.add("dark");
  themeToggleLightIcon.classList.remove("hidden");
  themeToggleDarkIcon.classList.add("hidden"); // Asegura que el otro esté oculto
} else {
  // Si está en claro (o primera visita sin preferencia oscura), muestra el icono de luna
  htmlEl.classList.remove("dark");
  themeToggleDarkIcon.classList.remove("hidden");
  themeToggleLightIcon.classList.add("hidden"); // Asegura que el otro esté oculto
}

// --- Lógica del Event Listener para el botón ---
themeToggleBtn.addEventListener("click", function () {
  // 1. Alternar la clase 'dark' en el elemento <html>
  htmlEl.classList.toggle("dark");

  // 2. Alternar la visibilidad de los iconos (sol/luna)
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // 3. Guardar la preferencia actual en localStorage
  if (htmlEl.classList.contains("dark")) {
    localStorage.setItem(STORAGE_KEY, "dark");
  } else {
    localStorage.setItem(STORAGE_KEY, "light");
  }
});
