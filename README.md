# PRACTICA---IA-DRIVEN-PROGRAMMING---JOSE-MARIA

# Aplicación de Saludos

## Descripción

Esta aplicación web permite mostrar un saludo personalizado a partir del nombre introducido por el usuario.

La aplicación incluye las siguientes funcionalidades:

- Mostrar un saludo inicial.
- Permitir introducir un nombre.
- Mostrar un saludo personalizado.
- Mantener el saludo inicial cuando el campo está vacío.
- Limpiar el formulario mediante un botón adicional.

El proyecto ha sido desarrollado siguiendo una aproximación basada en especificaciones y tests.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Python (`unittest`)

---

# Instalación

No es necesario instalar dependencias externas.

## Clonar o descargar el proyecto

```bash
git clone <repositorio>
```

O descargar los archivos manualmente.

---

# Ejecución de la aplicación

1. Abrir la carpeta del proyecto.
2. Ejecutar el archivo `index.html` en un navegador web.

También puede utilizarse una extensión como **Live Server** en Visual Studio Code.

---

# Ejecución de los tests

Los tests están desarrollados en Python utilizando `unittest`.

## Ejecutar tests

```bash
python test_saludos.py
```

En algunos sistemas:

```bash
python3 test_saludos.py
```

---

# Estructura del proyecto

```text
/
├── index.html
├── styles.css
├── app.js
├── test_saludos.py
├── SPECS.md
└── README.md
```

---

# Funcionalidades principales

## Saludo inicial

Al cargar la aplicación se muestra:

```text
Hola Mundo
```

## Saludo personalizado

Si el usuario introduce un nombre y pulsa el botón:

```text
Hola, Ana
```

## Campo vacío

Si el campo está vacío, el saludo no cambia y se mantiene:

```text
Hola Mundo
```

## Botón limpiar

La aplicación incluye un botón adicional que:

- Vacía el campo de texto.
- Restaura el saludo inicial.

---

# Tests implementados

Los tests cubren los siguientes comportamientos:

- Saludo inicial.
- Saludo personalizado.
- Comportamiento con campo vacío.
- Limpieza del formulario.
- Restauración del saludo inicial.

---

# Uso de IA

## Herramienta utilizada

Se ha utilizado:

- ChatGPT (OpenAI)

---

## Principales prompts utilizados

### Generación de especificaciones

- "Quiero que me hagas un archivo SPECS.md..."
- "Ahora hazme la actualización del archivo SPEC.md para añadir una mejora sencilla..."

### Generación de tests

- "Quiero que según estas especificaciones me generes tests de python..."
- "Ahora actualiza los tests de python..."

### Generación de código

- "Genera el código de la primera versión de la aplicación web..."
- "Sepárame el html, css y js en diferentes archivos..."
- "Actualiza la aplicación según estas nuevas funciones..."

### Introducción de errores para testing

- "Métele un errorcillo al app.js para hacer tests con NTP"

---

## Código generado por la IA

La IA generó:

- La estructura inicial de la aplicación web.
- El HTML principal.
- Los estilos CSS.
- La lógica JavaScript.
- La documentación `SPECS.md`.
- El `README.md`.
- Los tests automáticos en Python.

---

## Tests generados por la IA

La IA generó tests para:

- Verificar el saludo inicial.
- Verificar el saludo personalizado.
- Verificar el comportamiento con campo vacío.
- Verificar la limpieza del formulario.
- Verificar la restauración del saludo inicial.

---

## Errores detectados durante el proceso

Se introdujo intencionadamente un error en `app.js`:

```javascript
if (nombre === null)
```

Este error impedía detectar correctamente cadenas vacías.

---

## Corrección realizada

La validación fue corregida posteriormente utilizando:

```javascript
if (nombre.trim() === "")
```

Con esta corrección:

- Los tests volvieron a pasar correctamente.
- Se recuperó el comportamiento esperado.

---

## Decisiones tomadas durante el desarrollo

Durante el proceso se tomaron las siguientes decisiones:

- Separar HTML, CSS y JavaScript en archivos independientes.
- Mantener una estructura sencilla para facilitar el aprendizaje.
- Añadir una mejora incremental mediante un botón de limpieza.
- Mantener compatibilidad con los requisitos iniciales.
- Utilizar `unittest` para los tests automáticos.
- Introducir un error controlado para practicar testing y depuración.

---

# Autor

Proyecto académico desarrollado como práctica de especificación, testing y desarrollo incremental asistido por IA.
>>>>>>> ab695f6 (docs: completar README con uso de IA)
