import assert from "node:assert/strict";

/**
 * Lógica de la app
 */
function obtenerSaludo(nombre) {
    if (nombre.trim() === "") {
        return "Hola Mundo";
    }

    return `Hola, ${nombre}`;
}

/**
 * Simulación del botón limpiar
 */
function limpiarFormulario(nombreActual, saludoActual) {
    return {
        nombre: "",
        saludo: "Hola Mundo"
    };
}

/**
 * TEST 1: saludo inicial
 */
function testSaludoInicial() {
    const resultado = obtenerSaludo("");
    assert.equal(resultado, "Hola Mundo");
}

/**
 * TEST 2: saludo personalizado
 */
function testSaludoPersonalizado() {
    const resultado = obtenerSaludo("Ana");
    assert.equal(resultado, "Hola, Ana");
}

/**
 * TEST 3: campo vacío
 */
function testCampoVacio() {
    const resultado = obtenerSaludo("");
    assert.equal(resultado, "Hola Mundo");
}

/**
 * TEST 4: limpiar formulario
 */
function testLimpiarFormulario() {
    const resultado = limpiarFormulario("Ana", "Hola, Ana");

    assert.equal(resultado.nombre, "");
    assert.equal(resultado.saludo, "Hola Mundo");
}

/**
 * TEST 5: restaurar saludo tras limpiar
 */
function testRestaurarSaludo() {
    const resultado = limpiarFormulario("Carlos", "Hola, Carlos");

    assert.equal(resultado.saludo, "Hola Mundo");
}

function runTests() {
    testSaludoInicial();
    testSaludoPersonalizado();
    testCampoVacio();

    testLimpiarFormulario();
    testRestaurarSaludo();

    console.log("✔ Tests completos");
}

runTests();