// * Operadores 

let a = 5
let b = 10

console.log("--------operadores basicos--------")
console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicacion
console.log(a / b) // division
console.log(a % b) // modulo
console.log(a ** b) // exponente

console.log("--------operadores de I/D--------")

a++ //incremento
console.log(a)

a-- //decremento
console.log(a)

console.log("--------operadores de asignacion--------")

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

console.log("--------operadores de comparacion--------")

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 5)   //igualdad por valor
console.log(a == "5") //igualdad por valor
console.log(a == a)
console.log(a === a) //igualdad por identidad (tipo y valor de dato)
console.log(a === 5)
console.log(a === "5")
console.log(a != 5)
console.log(a !== "5")

console.log("--------operadores logicos--------")

console.log("operador and(&&):")

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 > 10 && 15 < 20)

console.log("operador or(||):")

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 > 10 || 15 < 20)

console.log("operador not(!):")

console.log(!true)
console.log(!false)

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")