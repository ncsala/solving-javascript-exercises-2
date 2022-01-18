

var global = 'Hola!';

function a() {
    // como no hay una variable llamada global en este contexto,
    // busca en el outer que es el global
    console.log(global);
    global = 'Hello!'; // cambia la variable del contexto global
}

function b() {
    // declaramos una variable global en nuestro contexto
    // esta es independiente 
    var global = 'Chao';
    console.log(global);
}

a(); // 'Hola!'
b(); // 'Chao'
console.log(global); // 'Hello'