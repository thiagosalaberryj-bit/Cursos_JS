//Strings

//Concatenación

let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); // Juan Pérez

//longitud de un string

console.log(nombreCompleto.length); // 10

//acceso a caracteres

console.log(nombreCompleto[0]); // J
console.log(nombreCompleto[11]); // undice fuera de rango, undefined

//métodos comunes de strings
console.log(nombreCompleto.toUpperCase()); // JUAN PÉREZ
console.log(nombreCompleto.toLowerCase()); // juan pérez
console.log(nombreCompleto.indexOf("Pérez")); // 5
console.log(nombreCompleto.slice(0, 4)); // Juan
console.log(nombreCompleto.replace("Juan", "Carlos")); // Carlos Pérez
console.log(nombreCompleto.split(" ")); // [ 'Juan', 'Pérez' ]
console.log(nombreCompleto.includes("Pérez")); // true
console.log(nombreCompleto.startsWith("Juan")); // true
console.log(nombreCompleto.endsWith("Pérez")); // true

let textoEnLineas = `hola, este es
un mensaje en dos lineas.`;

//Plantillas literales (template literals)

let edad = 30;
let saludo = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
console.log(saludo); // Hola, mi nombre es Juan Pérez y tengo 30 años.

