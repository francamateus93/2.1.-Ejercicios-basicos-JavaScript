// Ejercicio 1.1: Arrow functions
console.log("Ejercicio 1.1: Arrow functions")

/*----------- Ejercicio 1*/
console.log("----- Ej. 1:")

const add = (a, b) => a + b;
console.log(add);

/*----------- Ejercicio 2*/
console.log("----- Ej. 2:")


const randonNumber = () => Math.floor(Math.random() * 100);
console.log(randonNumber(10));


/*----------- Ejercicio 3 - Nivel 2*/
console.log("----- Ej. 3:")

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => { console.log(`Hola, ${this.name}`) };
}

let person = new Person('John Smith');
person.greet();


/*----------- Ejercicio 4 - Nivel 2*/
console.log("----- Ej. 4:")


const arr = [1, 3, 5, 7, 9];
const printNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printNumbers(arr);

/*----------- Ejercicio 5 - Nivel 3*/
console.log("----- Ej. 5:")


// const printAfter = () => {
//   setTimeout( () => {
//     console.log("My Message was delivered.");}, 3000);
// };

// printAfter();


// Ejercicio 1.2: Operador ternario
console.log("Ejercicio 1.2: Operador ternario")

/*----------- Ejercicio 1*/
console.log("----- Ej. 1:")

let edad = 10;
function puedeConducir(edad) {
  return edad >= 18 ? "Puedes conducir" : "No puedes conducir";
}

console.log(puedeConducir(10));

/*----------- Ejercicio 2*/
console.log("----- Ej. 2:")

let num1 = 1;
let num2 = 2;

let resultado = num1 > num2 ? "num1 es mayor" : "num2 es mayor";
console.log(resultado);

/*----------- Ejercicio 3 - Nivel 2*/
console.log("----- Ej. 3:")

let num = 10;
let result = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Cero";
console.log(result);

const encontrarMaximo = (a, b, c) => {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(encontrarMaximo(40, 20 , 15));

/*----------- Ejercicio 4 - Nivel 3*/
console.log("----- Ej. 4:")

const arra = [1, 2, 3, 4, 5]
const parOImpar = (arra) => {
  for (let i = 0; i < arra.length; i++) {
    console.log(arra[i] % 2 ? "Impar" : "Par");
  }
}
parOImpar(arra);


// Ejercicio 1.3: Callbacks
console.log("Ejercicio 1.3: Callbacks")

/*----------- Ejercicio 1*/
console.log("----- Ej. 1:")

function procesar(num, callback) {
  return callback(num);
}

function duplicar(num) {
  return num * 5;
}

function reduzir(num) {
  return num - 1;
}

console.log(procesar(5, duplicar));
console.log(procesar(6, reduzir));

/*----------- Ejercicio 2*/
console.log("----- Ej. 2:")

function calculadora(num1, num2, callback) {
  return callback(num1, num2);
}

function suma(num1, num2) {
  return num1 + num2;
}

console.log(calculadora(5, 4, suma));
console.log(calculadora(25, 40, suma));

/*----------- Ejercicio 3 - Nivel 2*/
console.log("----- Ej. 3:")

// function esperarISaludar(nombre, callback) {
//   setTimeout( () => {
//     callback(nombre);
//   }, 2000);
//     };

// function saludar(nombre) {
//   return console.log(`Hola, ${nombre}. Como estás?`);
// }

// esperarISaludar('Luis', saludar);

/*----------- Ejercicio 4 - Nivel 2*/
console.log("----- Ej. 4:")

const array = [10, 38, 6, 22, 75];

function procesarElements(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function invocarElements(array) {
  return console.log(array);
}

procesarElements(array, invocarElements);

/*----------- Ejercicio 5 - Nivel 3*/
console.log("----- Ej. 5:")

let cadena = '¡la cadena de caracteres!'

function procesarCadena(cadena, callback) {
  let cadenaMayuscula = cadena.toUpperCase();
  callback(cadenaMayuscula);
}

function newCadena(cadena) {
  return console.log(cadena);
}

procesarCadena(cadena, newCadena);
