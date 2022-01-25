// Recordar que simpre la ultima función en ejecutarse, es la primera en devolver el valor.


// ejemplo 1
//----
function contar(n) {
  if(n == 0) return; // siempre tiene que haber un condicional para detener la recursividad

  // console.log(n); // la operacion que se quiere realizar en cada iteración

  contar(n - 1); // llamar a nuestra función 
}

contar(10);
//----

// ejemplo 2
//--------

//--------
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let c = new Node('C:/');
let users = new Node('Users');
let system = new Node('System');

let file1 = new Node('file.txt');
let file2 = new Node('imagen.jpg');
let file3 = new Node('file.doc');

c.left = users;
c.right = system;

users.left = file1;
users.right = file2;

system.left = file3;

function recorrido(node) {
  if(node == null) return;

  console.log(node.data);

  recorrido(node.left);
  recorrido(node.right);
}

// recorrido(c);
//----