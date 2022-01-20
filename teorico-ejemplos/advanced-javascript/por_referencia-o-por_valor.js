// Por valor (lo copia)
let a = 5;
let b = 7;

a = b;
b = 15;
console.log(a);

// Por referencia (guarda la dirección) 
// Todo lo que sea objetos se pasa por referencia
let c;
let d = {nombre:'Nicolas'};

c = d;
d.nombre = 'Juana';
console.log(c);