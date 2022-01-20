"use strict";

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let contador = 0;
  
  return function () {
    console.log(++contador);
  }
}

const newCounter = counter();
newCounter();
newCounter();
newCounter();


// Porque esto no funciona?
/* function counter() {
  let contador = 0;
  
  (function () {
    console.log(++contador);
  }) ();
}

counter();
counter();
counter(); */

// Es similar a hacer esto solo que el contador se guarda en el "clousure"
/* let contador = 0;
function valorCreciente(){
  console.log(++contador);
}
valorCreciente();
valorCreciente();
valorCreciente(); */


function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  let cache = {}; // creamos un objeto para guardar los argumentos
  
  return function (argumento) {
    // guardar argumento y resultado de callback(argumento);   

    // verifico si esta el argumento guardado, si lo esta, lo retorno. Tambien retorno el objeto para comprobar.
    if (cache.hasOwnProperty(argumento)) return [cache,'Valor devuelto: ' + cache[argumento]]; 
    cache[argumento] = cb(argumento); // creo la propiedad de nombre argumento y guardo el resultado de llamar al cb
    // retorno el cache guardado y el objeto con todos los valores para comprobar  si es correcto
    return [cache,'Valor devuelto: ' + cache[argumento]]; 
  }
}

// Aqui escribo la función que vo a pasar como callback, recibe el argumento a traves de la función
// anonima que se encuentra dentro de la función 'cacheFunction()'
function funcionPasadaComoCallback(argumento) { 
  return argumento * argumento; 
}

const invocando = cacheFunction(funcionPasadaComoCallback);
console.log(invocando(5)); // realizar una operacion invocando a cb, guardar el argumento // en estas invocaciones se pasa el argumento
console.log(invocando(6)); // paso otro argumento y realiza lo mismo que invocación anterior 
console.log(invocando(5)); // si paso un argumento repetido, no invocar a cb de nuevo, devuelvo el argumento ya guardado

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}
// Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = undefined;
let getNombreAlumno = undefined;

/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = undefined;

let textoGuiones = undefined;

let textoUnderscore = undefined;

// No modifiquen nada debajo de esta linea
// --------------------------------

/* module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
 */