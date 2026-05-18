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

document
    .getElementById("boton-saludo")
    .addEventListener("click", actualizarSaludo);