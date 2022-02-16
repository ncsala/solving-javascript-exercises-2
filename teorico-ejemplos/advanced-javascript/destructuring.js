// DESESCTRUCTURING

const array = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = array;

console.log(a, b, c, d, e);

//----------------------------------------------------------------
// Otro ejemplo

function f1() {
  return [6, 7, 8, 9, 10];
}

const arreglo = f1();
const [f, g, h, i, j] = f1();

console.log(f, g, h, i, j);
//----------------------------------------------------------------

// Otro ejemplo - Con objetos
const persona = {
  firstName: "John",
  lastName: "Pepinillo",
};

// La manera clásica de imprimir los nombres
const primerNombre = persona.firstName;
const apellido = persona.lastName;
console.log(primerNombre, apellido);

// Con la desestructuración
// Como nota importante: no importa el orden de las propiedades, pero si tienen que llamarse igual
const { firstName, lastName } = persona;
console.log(firstName, lastName);
