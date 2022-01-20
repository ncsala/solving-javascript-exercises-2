// LIFO - Last In First Out

let stack = [];
console.log(stack);
// Agregamos los elementos
stack.push(1);
console.log(stack);
stack.push(10);
console.log(stack);
stack.push(5);
console.log(stack);
stack.push(8);
console.log(stack);
// Cuando vamos a remover, removemos el último elemento agregado
console.log('Acá removemos el último que entro');
stack.pop(8);
console.log(stack);
