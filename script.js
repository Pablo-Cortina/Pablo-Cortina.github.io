// Botón del modo claro / oscuro
const boton = document.getElementById("boton-modo");
boton.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-mode");
    if (document.documentElement.classList.contains("dark-mode")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
});