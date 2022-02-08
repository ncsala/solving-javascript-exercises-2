// FIFO - First In First Out

let queue = [];
console.log();
// Agregamos los elementos
queue.push(1);
console.log(queue);
queue.push(4);
console.log(queue);
queue.push(2);
console.log(queue);
queue.push('Otro elemento'); // Notesé que no tienen porque ser necesariamente números.
console.log(queue);
// Acá removemos el primer elemento que agregamos.
console.log('Acá removemos el primer elemento')
queue.shift(1);
console.log(queue);