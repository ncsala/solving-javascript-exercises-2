// function hola(saludo, nombre) {
//   // si quiero retorar un objeto :
//   return {
//       saludo: saludo,
//       nombre: nombre,
//   }
// }

// function hola2(saludo, nombre) {
  //   // cuando el nombre del value es igual al del key, se puede omitir el value:
  //   return {
    //       saludo,
    //       nombre,
    //   }
    // }
    
// console.log(hola('Hola', 'Martina')); 
// console.log(hola2('Hola', 'Martina')); 

//Otro ejemplo -----

let nombre = 'Kenai', edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function() {
    console.log('guauu guauu!');
  }
}

console.log(perro);
perro.ladrar();

// puedo agregar incluso propiedades nuevas de la forma convencional.
// tambien se simplifica la forma de agregar metodos
const dog = {
  nombre,
  edad,
  raza: 'Callejero',
  // nueva forma de escribir los metodos
  ladrar() {
    console.log('FORMA DOS -> guauu guauu');
  }
}

console.log(dog);
dog.ladrar();