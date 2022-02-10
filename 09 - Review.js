// Implementar la funcion countProps: a partir de un objeto en el cual cada propiedad puede
// contener cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel,
// ya sea inicial u objetos anidados
// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: "Franco",
    a3: { f: "r", a: "n", c: { o: true } },
  },
  b: 2,
  c: [1, { a: 1 }, "Franco"],
};

var countProps = function (obj) {
  let count = 0;

  for (let prop in obj) {
    count++;
    if (typeof obj[prop] === 'object') {
      // los arreglos devuelven true
      if (!Array.isArray(obj[prop])) {
        count += countProps(obj[prop]);
      }
    }
  }

  return count;
};

console.log(countProps(obj));