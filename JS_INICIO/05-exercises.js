// 1️⃣ Operaciones aritméticas 
let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let modulo = 10 % 3;

// 2️⃣ Operaciones de asignación
let a = suma;
a += 5;

let b = resta;
b -= 2;

let c = multiplicacion;
c *= 2;

let d = division;
d /= 2;

let e = modulo;
e %= 2;

// 3️⃣ Comparaciones verdaderas
console.log("=== Comparaciones verdaderas ===");
console.log(10 > 5);
console.log(5 < 10);
console.log(10 === 10);
console.log(10 !== 5);
console.log(10 >= 10);

// 4️⃣ Comparaciones falsas
console.log("=== Comparaciones falsas ===");
console.log(10 < 5);
console.log(5 > 10);
console.log(10 === "10");
console.log(10 <= 5);
console.log(5 !== 5);

// 5️⃣ Operador lógico AND
console.log("=== AND ===");
console.log(10 > 5 && 5 < 10);

// 6️⃣ Operador lógico OR
console.log("=== OR ===");
console.log(10 < 5 || 5 < 10);

// 7️⃣ AND + OR combinados
console.log("=== AND + OR ===");
console.log((10 > 5 && 5 > 3) || 10 < 1);

// 8️⃣ Negación
console.log("=== Negación ===");
console.log(!true);
console.log(!(10 < 5));

// 9️⃣ Operador ternario
console.log("=== Ternario ===");
let edad = 16;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);

// 🔟 Combinación total
console.log("=== Combinación total ===");
let resultado = (10 + 5 > 12) && (20 / 2 === 10);
console.log(resultado);
