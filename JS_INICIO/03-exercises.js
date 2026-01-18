// =============================== 
// Crear variables primitivas
// ===============================
let num = 10;                  // number
let texto = "Hola";            // string
let bool = true;               // boolean
let indef                     // undefined
let vacio = null;              // null
let simbolo = Symbol("id");    // symbol
let grande = 1234567890123n;   // bigint

console.log("=== VALOR Y TIPO INICIAL ===");
console.log(num, typeof num);
console.log(texto, typeof texto);
console.log(bool, typeof bool);
console.log(indef, typeof indef);
console.log(vacio, typeof vacio); 
console.log(simbolo, typeof simbolo);
console.log(grande, typeof grande);

// =======================================
// Modificar valores (MISMO TIPO)
// =======================================
num = 99;
texto = "Chau";
bool = false;
indef = undefined;
vacio = null;
simbolo = Symbol("nuevo");
grande = 9999999999999n;

console.log("\n=== MISMO TIPO ===");
console.log(num, typeof num);
console.log(texto, typeof texto);
console.log(bool, typeof bool);
console.log(indef, typeof indef);
console.log(vacio, typeof vacio);
console.log(simbolo, typeof simbolo);
console.log(grande, typeof grande);

// =======================================
// Modificar valores (DISTINTO TIPO)
// =======================================
num = "ahora soy texto";
texto = 123;
bool = null;
indef = true;
vacio = "ya no es null";
simbolo = 42;        
grande = 10;         

console.log("\n=== DISTINTO TIPO ===");
console.log(num, typeof num);
console.log(texto, typeof texto);
console.log(bool, typeof bool);
console.log(indef, typeof indef);
console.log(vacio, typeof vacio);
console.log(simbolo, typeof simbolo);
console.log(grande, typeof grande);
