"use strict";
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  // creo un nuevo arbol en la rama segun corresponda, si es menor al valor a la izquierda sino a la derecha
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value) // busco de forma recursiva hasta que no haya nodo, cuando el todo no existe creo uno nuevo en el 'else'
    } else {
      this.left = new BinarySearchTree(value); // cuando ya no hay nodo crea nuevo arbol
    }
  } else if (value > this.value) {
    this.right
      ? this.right.insert(value)
      : (this.right = new BinarySearchTree(value)); // lo mismo q arriba pero ternario
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value == value) return true;
  if (this.left) {
    if (this.left.contains(value)) return true;
  }
  if (this.right?.contains(value)) return true; // lo mismo q arriba pero con el right y escrito diferente 

  return false;
};

// otra forma de escribir el contains
/* BinarySearchTree.prototype.contains = function (value) {
  return value === this.value
    ? true
    : value < this.value
      ? this.left?.contains(value)
      : this.right?.contains(value) || false;
}; */

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === 'in-order' || order === undefined) {
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }

  if (order === 'pre-order') {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }

  if (order === 'post-order') {
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, nodes) {
  if (nodes === undefined) nodes = [];

  cb(this.value);

  if (this.left) {
    nodes.push(this.left);
  }

  if (this.right) {
    nodes.push(this.right);
  }

  while (nodes.length) {
    nodes.shift().breadthFirstForEach(cb, nodes); 
  }
};

BinarySearchTree.prototype.size = function () {
  let result = 1;
  result += this.left ? this.left.size() : 0;
  result += this.right && this.right.size(); // lo mismo q la linea de arriba, pregunta si existe, entonces devuelve el tamaño
  console.log(result);
  return result;
};

const miArbol = new BinarySearchTree(5);
miArbol.insert(2);
miArbol.insert(7);
miArbol.insert(9);
miArbol.insert(-2);
miArbol.insert(3);
miArbol.insert(-5);

console.log(miArbol);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
