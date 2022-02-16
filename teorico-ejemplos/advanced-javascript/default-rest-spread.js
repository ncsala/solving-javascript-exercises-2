// DEFAULT
function f(x, y = 12) {
  // Si no se pasa valor para y toma el valor por defecto 12
  return x + y;
}
// console.log(f(3));

// SPREAD OPERATORS
function f2(x, ...y) {
  // con los tres puntos se indica que i puede tomar varios elementos, 
  // estos llegan en forma de arreglo
  console.log('Contenido de y -', y);
  return x * y.length;
}
console.log('Funcion 2 -', f2(3, 'hello', true, 8, 'Hola mundo', false));

// OTRO?
function f3(x, y, z) {
  return x + y + z;
}
// Se pasa cada elemento como argumentos
console.log(f3(...[1,2,3]));


