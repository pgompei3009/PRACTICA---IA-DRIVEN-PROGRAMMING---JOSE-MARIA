function obtenerSaludo(nombre) {
    if (nombre.trim() === "") {
        return "Hola Mundo";
    }

    return `Hola, ${nombre}`;
}

function actualizarSaludo() {
    const nombre = document.getElementById("nombre").value;
    const saludo = obtenerSaludo(nombre);

    document.getElementById("saludo").textContent = saludo;
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("saludo").textContent = "Hola Mundo";
}

document
    .getElementById("boton-saludo")
    .addEventListener("click", actualizarSaludo);

document
    .getElementById("boton-limpiar")
    .addEventListener("click", limpiarFormulario);