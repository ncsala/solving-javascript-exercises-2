let miArray = [1, 2, 3, 4, 5, 6];

// FOREACH -----------------------------------------------------------------------------------------------
// El método forEach() ejecuta la funcion indicada una vez por cada elemento del array.
// forEach() no muta/modifica el array desde el que es llamado (aunq el callback invocado si podria hacerlo)
// Retorna undefined
miArray.forEach(function (elemento, indice, array) {
  console.log("ForEach", elemento * 2, indice + 3, array);
});
//-------------------------------------------------------------------------------------------------------

// MAP -----------------------------------------------------------------------------------------------
// map() crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.
miArray = miArray.map(function (elemento, indice, array) {
  return elemento * 2;
});

// map escrito con arrow function y con solo el primer parametro
// miArray = miArray.map(elemento => elemento * 2);

console.log("Map", { miArray });

// Otro ejemplo con map, algo de la vida real más util
const facturas = [
  { precio: 23, cantidad: 1 },
  { precio: 19, cantidad: 2 },
  { precio: 14, cantidad: 4 },
  { precio: 22, cantidad: 1 },
];

// se agrega iva a precios
const preciosConIva = facturas.map((elemento) => elemento.precio + elemento.precio * 0.21);
console.log({ preciosConIva });
//-------------------------------------------------------------------------------------------------------

// REDUCE -----------------------------------------------------------------------------------------------
// El método reduce() ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como 
// resultado un unico valor.
let otroArray = [2, 8, 6, 3, 10];

otroArray = otroArray.reduce((a, b) => a+b);

console.log({otroArray});
//-------------------------------------------------------------------------------------------------------

// FILTER -----------------------------------------------------------------------------------------------
// El método filter() crea un nuevo array con todos los elementos que cumplan la condicion implementada
//por la fauncion dada
let arrayFilter = [5, 20, 25, 16, 42, 43];

arrayFilter = arrayFilter.filter((elemento) => elemento > 40);

console.log({arrayFilter});
//-------------------------------------------------------------------------------------------------------
