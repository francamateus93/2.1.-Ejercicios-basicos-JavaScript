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


// Ejercicio 1.4: Rest & Spread Operators
console.log("Ejercicio 1.4: Rest & Spread Operators")

/*----------- Ejercicio 1*/
console.log("----- Ej. 1:")

const array1 = [10, 20];
const array2 = [35, 45];

const array3 = [...array1, ...array2];

console.log(array3);

/*----------- Ejercicio 2*/
console.log("----- Ej. 2:")

function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b);
}

console.log(sumar(1, 2, 3, 4));

/*----------- Ejercicio 3 - Nivel 2*/
console.log("----- Ej. 3:")

const objeto1 = {
  name: "Mateus",
  age: 30,
}

const objeto2 = {...objeto1}
objeto2.surname = "França";

console.log(objeto1);
console.log(objeto2);

/*----------- Ejercicio 4 - Nivel 2*/
console.log("----- Ej. 4:")

const Elements = ["Mateus", "França", 30, 1993];

const [primeiro, segundo, ...numeros] = Elements

console.log(primeiro, segundo)
console.log(numeros)

/*----------- Ejercicio 5 - Nivel 3*/
console.log("----- Ej. 5:")

function myProfile(a, b, c) {
  console.log(a, b, c);
}

const profile = [1993, 1989, 1982];

myProfile(...profile);

/*----------- Ejercicio 6 - Nivel 3*/
console.log("----- Ej. 6:")

let datos1 = {
  name: "John",
  age: 30,
}

let datos2 = {
  country: "France",
  children: false,
}

const datos = { ...datos1, ...datos2};
console.log(datos);

// Ejercicio 1.5: Array transformations
console.log("Ejercicio 1.5: Array transformations")

/*----------- Ejercicio 1 - MAP*/
console.log("----- Ej. 1:")

const nums = [1, 2, 3, 4];
const newNums = nums.map(x => x * x);

console.log(newNums);

/*----------- Ejercicio 2 - FILTER*/
console.log("----- Ej. 2:")

const pairNums = nums.filter(x => x % 2 === 0);
console.log(pairNums);

/*----------- Ejercicio 3 - FIND*/
console.log("----- Ej. 3:")

const numbers = [1, 10 , 8, 11];
const mayorDiez = numbers.find(x => x > 10);

console.log(mayorDiez);

/*----------- Ejercicio 4 - REDUCE*/
console.log("----- Ej. 4:")

const prices = [13, 7, 8, 21];
const sumPrices = prices.reduce((a, b) => (a + b));

console.log(sumPrices);

/*----------- Ejercicio 5 - Nivel 2*/
console.log("----- Ej. 5:")

const precios = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const procesarPrecios = arr => arr.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

console.log(procesarPrecios(precios)); 

