import assert from "node:assert/strict";

function obtenerSaludo(nombre) {
    if (nombre.trim() === "") {
        return "Hola Mundo";
    }

    return `Hola, ${nombre}`;
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

function runTests() {
    testSaludoInicial();
    testSaludoPersonalizado();
    testCampoVacio();

    console.log("✔ Tests originales OK");
}

runTests();