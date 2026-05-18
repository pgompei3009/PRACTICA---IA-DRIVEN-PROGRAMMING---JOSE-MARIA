# PRACTICA---IA-DRIVEN-PROGRAMMING---JOSE-MARIA

## Descripción

La aplicación consiste en una interfaz sencilla que permite al usuario introducir su nombre y recibir un saludo personalizado.  
Al iniciar la aplicación, debe mostrarse un mensaje por defecto: **Hola Mundo**.

El sistema debe validar si el campo de entrada está vacío. En ese caso, el comportamiento será mantener el mensaje inicial sin personalización.

Además, la aplicación incluirá una mejora sencilla: un botón para limpiar el campo de texto y restaurar el saludo inicial.

---

# Requisitos Funcionales

## Funcionalidades principales

1. La aplicación debe mostrar un saludo inicial.
2. La aplicación debe permitir introducir un nombre.
3. La aplicación debe mostrar un saludo personalizado.
4. La aplicación debe comportarse de una forma concreta si el campo está vacío.

## Nueva mejora: botón de limpieza

5. La aplicación debe incluir un botón para limpiar el campo de texto.
6. Al pulsar el botón de limpieza, el campo debe vaciarse.
7. Al pulsar el botón de limpieza, el saludo debe volver al estado inicial.

---

# Casos de Uso

## Caso de Uso 1: Entrada en la aplicación

### Actor
Usuario

### Flujo principal
1. El usuario entra en la aplicación.
2. La aplicación muestra el mensaje inicial.

### Resultado esperado
Se visualiza el texto: **Hola Mundo**.

---

## Caso de Uso 2: Introducción de nombre

### Actor
Usuario

### Flujo principal
1. El usuario introduce un nombre en el campo de texto.
2. El usuario pulsa el botón de saludo.
3. La aplicación muestra un saludo personalizado.

### Resultado esperado
Se visualiza el texto: **Hola, [nombre]**.

---

## Caso de Uso 3: Campo vacío

### Actor
Usuario

### Flujo principal
1. El usuario deja el campo vacío.
2. El usuario pulsa el botón de saludo.
3. La aplicación mantiene el saludo inicial.

### Resultado esperado
Se visualiza el texto: **Hola Mundo**.

---

## Caso de Uso 4: Limpieza del formulario

### Actor
Usuario

### Flujo principal
1. El usuario introduce un nombre.
2. El usuario pulsa el botón de limpiar.
3. La aplicación vacía el campo de texto.
4. La aplicación restaura el saludo inicial.

### Resultado esperado
El campo queda vacío y se visualiza el texto: **Hola Mundo**.

---

# Criterios de Aceptación

## Funcionalidades principales

1. Al cargar la aplicación debe verse el texto **Hola Mundo**.
2. Si el usuario introduce **Ana** y pulsa el botón, debe mostrarse **Hola, Ana**.
3. Si el campo está vacío y el usuario pulsa el botón, debe seguir mostrándose **Hola Mundo**.

## Nueva mejora: botón de limpieza

4. Debe existir un botón visible con el texto **Limpiar**.
5. Si el usuario pulsa el botón **Limpiar**, el campo de texto debe quedar vacío.
6. Si el usuario pulsa el botón **Limpiar**, el saludo mostrado debe volver a ser **Hola Mundo**.