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