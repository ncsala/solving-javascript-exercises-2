'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 
  if (n <= -1) return 'Debe ingresar un numero mayor o igual a Cero'
  if (n >= 0 && n <= 1) return 1;
  return n * nFactorial(n - 1); 
}
// console.log(nFactorial(14));

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if (n <= 1) {
    return n;
  }
  else {
    return nFibonacci(n-1) + nFibonacci(n - 2);
  }
}
// console.log(nFibonacci(6));


// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.


// metodo clasico de definicar las clases en otros lenguajes, por ejemplo java
//----
/* class Queue {
  constructor() {
    //constructor
    this.arreglo = [];
  }
  // defino los metodos
  // devuelve cantidad de elemntos de la pila
  size() {
    return this.arreglo.length;
  }
  // agrega elemento a la cola
  enqueue(elemento) {
    this.arreglo.push(elemento);
  }
  // elimina el primer elemento que entro a la cola
  dequeue() {
    this.arreglo.shift();
  }
}

const cola1 = new Queue();
cola1.enqueue('esto es una prueba');
cola1.enqueue('esta es la segunda prueba');
cola1.denqueue(1);
console.log(cola1.size()); */
//----


// otra forma de definir las clases en javascript
//----
function Queue() {
  //constructor
  this.arreglo = [];
}

// defino los metodos
// devuelve cantidad de elemntos de la pila
Queue.prototype.size = function () {
  return this.arreglo.length;
};
// agrega elemento a la cola
Queue.prototype.enqueue = function (elemento) {
  this.arreglo.push(elemento);
};
// elimina el primer elemento que entro a la cola
Queue.prototype.dequeue = function () {
  return this.arreglo.shift();
};
//----

const cola1 = new Queue();
cola1.enqueue('esto es una prueba');
cola1.enqueue('esta es la segunda prueba');
console.log(cola1);
cola1.dequeue();
console.log(cola1);
console.log(cola1.size());


