

// En el archivo index se importan todos las variables exportadas en los otros archivos

// IMPORTANTE: esta solucion solo se utiliza con nodejs pq no es parte del ecmaScript
// No se utiliza para el frontend. Para ese caso se utiliza una alternativa.


// Asi se importa la variable exportada en el archivo modulouno.js y modulodos.js
// La funcion require trae el objeto exports de los archivos pasados por parametro
let importado2 = require('./modulodos.js');
console.log(importado2);

// Como exports es un objeto tambien se puede usar destructuring y guardar cada una de las propiedades 
// en distintas variables
let {ejemplo1, ejemplo2} = require('./modulouno.js');
console.log('Variable1:', ejemplo1, 'Variable2:', ejemplo2);

// La otra sintaxis escrita en el archivo modulotres.js
let importado3 = require('./modulotres.js');
console.log(importado3);