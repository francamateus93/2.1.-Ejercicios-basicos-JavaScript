// Ejercicio 1.1: Arrow functions - Nivel 1

// Ejercicio 1

const add = (a, b) => a + b;

// Ejercicio 2

const randonNumber = () => Math.floor(Math.random() * 100);

console.log(randonNumber(10));

// Ejercicio 3

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => { console.log(`Hola, ${this.name}`) };
}

let person = new Person('John Smith');
person.greet();

// Ejercicio 1.1: Arrow functions - Nivel 2

// Ejercicio 4

const arr = [1, 3, 5, 7, 9];

const printNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printNumbers(arr);


