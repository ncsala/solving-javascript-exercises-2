// Los bundlers es lo que se utiliza para exportar e importar variables en el frontend

// Asi se importan. Esto iria en el archivo index.js 
import {suma, nombre} from './archivoAImportar1' // Cuando no se usa export se desestructura las variables exportadas 
import resta from './archivoAImportar2' // Se importa el export default
import objeto from './archivoAImportar3' // Importamos objeto para importar varias variables a la vez

//************************************************************************************************ */

// Y asi se exportan

// Sintaxis 1------------ 'archivoAImportar1'
// Exportando una funcion 
function suma(a,b) {
  return a + b;
}

// Exportando una variable
const nombre = 'Nicolas';

// Sintaxis 2 --------------- 'archivoAImportar2'
function resta (a, b) {
  return a - b;
}
// export default resta;

// Asi se exportan varias variables y funciones a la misma vez 
// 'archivoAImportar3'
let nico = 'Nico';
let agus = 'Agus';
function multiplica (a, b) {
  return a * b;
}

export default {
  nico,
  agus,
  multiplica,
  resta,
  suma,
}
