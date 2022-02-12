// LINKED LIST ---------------------------------------------------------------------------------
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor);

  if (!this.head) {
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    return undefined;
  }

  if (this.head.next === null) {
    var unicoNodo = this.head;
    this.head = null;
    return unicoNodo.value;
  }

  var nodoActual = this.head.next;
  var nodoPrevious = this.head;
  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual;
    nodoActual = nodoActual.next;
  }
  nodoPrevious.next = null;
  return nodoActual.value;
};

LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head;

  if (nodoActual === null) {
    return null;
  }

  while (nodoActual !== null) {
    if (typeof arg === "function") {
      if (arg(nodoActual.value)) {
        return nodoActual.value;
      }
    } else if (nodoActual.value === arg) {
      return nodoActual.value;
    }
    nodoActual = nodoActual.next;
  }

  return null;
};

function Node(valor) {
  this.value = valor;
  this.next = null;
}

// EJERCICIOS linked list-----------------------------------------------------------------------------

//---------------------------------------------------------
//EJERCICIO 1
// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de menor a mayor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [1] --> [4] --> [5]
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let dataArray = [];
  let current = this.head;

  while (current.next) {
    dataArray.push(current.value);
    current = current.next;
  }
  dataArray.push(current.value);

  current = this.head;
  while (current.next) {
    this.remove();
  }
  this.remove();

  dataArray.sort();

  for (let node of dataArray) {
    this.add(node);
  }
};
//---------------------------------------------------------

// Mis tests -------------
// const miLista = new LinkedList();
// miLista.add(4);
// miLista.add(5);
// miLista.add(1);
// console.log(miLista);
// miLista.orderList();
// console.log(miLista);
//---------------------------
//---------------------------------------------------------
// EJERCICIO 2
// Agregar al prototipo de LinkedList un método reverseLinkedList que invierta el orden de los elementos de la lista.
// Ejemplo:
// let myList = Head --> [1] --> [2] --> [3] --> [4]
// myList.reverseLinkedList()
// myList = Head --> [4] --> [3] --> [2] --> [1]
LinkedList.prototype.reverseLinkedList = function () {
  // Tu código aca:
  let valueArray = [];
  let current = this.head;

  while (current.next) {
    valueArray.push(current.value);
    current = current.next;
  }
  valueArray.push(current.value);

  current = this.head;
  while (current.next) {
    this.remove();
  }
  this.remove();

  valueArray.reverse();

  for (let node of valueArray) {
    this.add(node);
  }
};
//---------------------------------------------------------

// Mi test-----------
// const miLista = new LinkedList();
// miLista.add(1);
// miLista.add(2);
// miLista.add(3);
// miLista.add(4);
// console.log(miLista);
// miLista.reverseLinkedList();
// console.log(miLista);
//--------------------

//---------------------------------------------------------
// EJERCICIO 3
// Implementar la función joinLinkedLists que, a partir de dos listas simplemente enlazadas
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> [2] --> [8] --> [22] --> null
//    Lista 2: Head --> [6] --> [15] --> [4] --> null
//    joinLinkedList(linkedListOne, linkedListTwo)
//    Head --> [2] --> [6] --> [8] --> [15] --> [22] --> [4] --> null
function joinLinkedList(linkedListOne, linkedListTwo) {
  // Tu código aca:
  let valueArray = [];
  let currentListOne = linkedListOne.head;
  let currentListTwo = linkedListTwo.head;
  let myJoinLinkedList = new LinkedList();

  while (currentListOne.next && currentListTwo.next) {
    if (currentListOne.value) valueArray.push(currentListOne.value);
    if (currentListTwo.value) valueArray.push(currentListTwo.value);
    currentListOne = currentListOne.next;
    currentListTwo = currentListTwo.next;
  }
  valueArray.push(currentListOne.value);
  valueArray.push(currentListTwo.value);

  for (let element of valueArray) {
    myJoinLinkedList.add(element);
  }

  return myJoinLinkedList;
}
//---------------------------------------------------------

// Mi test -------
let linkedListOne = new LinkedList();
linkedListOne.add(2);
linkedListOne.add(8);
linkedListOne.add(22);

let linkedListTwo = new LinkedList();
linkedListTwo.add(6);
linkedListTwo.add(15);
linkedListTwo.add(4);
// console.log(joinLinkedList(linkedListOne, linkedListTwo))
//----------------

// ARBOLES BINARIOS --------------------------------------------------------------------------------------
function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

// EJERCICIOS arboles binarios ----------------------------------------------------------------

// EJERCICIO 4
// Implementar la función searchMin que busque en nuestro arbol binario, el valor minimo.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
//  Debería retornarnos 2
BinarySearchTree.prototype.searchMin = function () {
  let minimumValue = this;

  while (minimumValue.left) {
    minimumValue = minimumValue.left;
  }

  return minimumValue.value;
};

// Mi test -------
// const miArbol = new BinarySearchTree(16);
// miArbol.insert(6);
// miArbol.insert(23);
// miArbol.insert(31);
// console.log(miArbol);
// miArbol.insert(14);
// miArbol.insert(17);
// miArbol.insert(2);
// miArbol.insert(5);
// miArbol.insert(16);
// miArbol.insert(-2);
// miArbol.insert(1);
// console.log(miArbol.searchMin());
//-------------------


// EJERCICIO 5
// Implementar la función createBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree.
// Ejemplo:
//    - Array[16,6,23,2,17,31,14,5];
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
function createBST(array) {
  // Tu código aca:
  let myNewTree = new BinarySearchTree(array[0]);

  for (let index = 1; index < array.length; index++) {
      myNewTree.insert(array[index]);
  }

  return myNewTree;
}

// Mi test -------
// console.log(createBST([16,6,23,2,17,31,14,5]));
//-------------------


// ----- Closures -----
// EJERCICIO 6
// Implementar la función passport que recibe como parámetro:
//  - Una edad mínima para que las personas puedan ingresar a un país
//  - El país en cuestión
// La función passport retorna una función isAllowed, la cual recibirá un arreglo de personas que quieren ingresar al país, y retornará un nuevo arreglo con los admitidos (aquellos que cumplan con la edad requerida).
function passport(minAge, country) {
  // Tu código aca:
  if (minAge < 18) return false;

  let allowedPeople = [];

  return function isAllowed(people) {
    for (let person of people) {
      if (person.age >= minAge && person.allowed.includes(country)) {
        allowedPeople.push(person);
      }
    }

    return !allowedPeople.length ? false : allowedPeople;
  };
}

// Mi test ----------------------------------------
// let people = [
//   { name: "Cristian", age: 19, allowed: ["BRA", "ALE"] },
//   { name: "Ana", age: 18, allowed: ["ALE", "ARG", "CANADA", 'BRA'] },
//   { name: "Nahuel", age: 23, allowed: ["ALE"] },
//   { name: "Cristian", age: 15, allowed: ["ALE"] },
// ];

// let newPassport = passport(18, "BRA");
// console.log(newPassport(people));
//---------------------------------------------------


// ---- RECURSION ----------------------------------------------------------
// EJERCICIO 7
// La función countDeep recibe por parámetro un arreglo que contiene números y/o arreglos (estos últimos contienen, a su vez, más números y/o arreglos), y retorna la cantidad de arreglos que hay en total, incluyendo al padre.
// Ejemplo:
// countDeep( [ 1, 2, 3, [ 4, [ 5, 6 ] ], 7, [ 8 ], 9] ) ----> Debería retornar 4
function countDeep(arr) {
  // Tu código aca:
  let numberOfArrays = 1;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      numberOfArrays += countDeep(arr[i]);
    }
  }
  return numberOfArrays;
}
//-------------------------------------------------------------------------

// Mi test -------
// console.log(countDeep([1, 2, 3, [4, [5, 6]], 7, [8], 9]));
//----------------

//-------------------------------------------------------------------------
// EJERCICIO 8
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]
var isAncestor = function (genealogyTree, ancestor, descendant) {
  // Tu código aca:
};


// COLAS----------------------------------------------------------------
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

// ---- Queue ----
//----------------------------------------------------------------
// EJERCICIO 9
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.

function cardGame(playerOneCards, playerTwoCards) {
  // Tu código aca:
  let castlePointsPlayerOne = 100;
  let castlePointsPlayerTwo = 100;
  let cardAttackPlayerOne = 0;
  let cardAttackPlayerTwo = 0;
  let cardDefensePlayerOne = 0;
  let cardDefensePlayerTwo = 0;

  while (
    playerOneCards.size() > 0 &&
    castlePointsPlayerOne > 0 &&
    castlePointsPlayerTwo > 0
  ) {
    cardAttackPlayerOne = playerOneCards.dequeue();
    cardAttackPlayerTwo = playerTwoCards.dequeue();

    cardDefensePlayerOne = playerOneCards.dequeue();
    cardDefensePlayerTwo = playerTwoCards.dequeue();

    if (cardAttackPlayerOne.attack > cardDefensePlayerTwo.defense) {
      castlePointsPlayerTwo -=
        cardAttackPlayerOne.attack - cardDefensePlayerTwo.defense;
    }
    if (cardAttackPlayerTwo.attack > cardDefensePlayerOne.defense) {
      castlePointsPlayerOne -=
        cardAttackPlayerTwo.attack - cardDefensePlayerOne.defense;
    }
  }

  if (castlePointsPlayerOne > castlePointsPlayerTwo) {
    return "PLAYER ONE";
  } else if (castlePointsPlayerTwo > castlePointsPlayerOne) {
    return "PLAYER TWO";
  } else {
    return "TIE";
  }
}
//-----------------------------------------------------------------------------

// Mi test -------
// const playerOneCards = new Queue();
// playerOneCards.enqueue({ attack: 30, defense: 26 });
// playerOneCards.enqueue({ attack: 5, defense: 55 });
// playerOneCards.enqueue({ attack: 18, defense: 5 });
// playerOneCards.enqueue({ attack: 29, defense: 28 });
// playerOneCards.enqueue({ attack: 40, defense: 15 });
// playerOneCards.enqueue({ attack: 3, defense: 50 });
// playerOneCards.enqueue({ attack: 3, defense: 2 });
// playerOneCards.enqueue({ attack: 15, defense: 10 });
// playerOneCards.enqueue({ attack: 100, defense: 43 });
// playerOneCards.enqueue({ attack: 30, defense: 28 });

// const playerTwoCards = new Queue();
// playerTwoCards.enqueue({ attack: 10, defense: 35 });
// playerTwoCards.enqueue({ attack: 60, defense: 15 });
// playerTwoCards.enqueue({ attack: 3, defense: 15 });
// playerTwoCards.enqueue({ attack: 9, defense: 60 });
// playerTwoCards.enqueue({ attack: 10, defense: 20 });
// playerTwoCards.enqueue({ attack: 30, defense: 60 });
// playerTwoCards.enqueue({ attack: 1, defense: 1 });
// playerTwoCards.enqueue({ attack: 11, defense: 8 });
// playerTwoCards.enqueue({ attack: 300, defense: 430 });
// playerTwoCards.enqueue({ attack: 45, defense: 20 });

// console.log(cardGame(playerOneCards, playerTwoCards));
//-------------------


// ---- Algoritmos ----
// EJERCICIO 10
// Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar la función va a recibir como parámetro una función
// que va a retornar 1 sí no hay que ordenarlo y -1 en el caso de que si haya que ordenarlo.
// Ejemplo:
// var array = [
//   {name: 'Cristian', age: 26, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
//   {name: 'Joaquin', age: 25, height: 1.77},
// ]
// specialSort(array, swapFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Cristian', age: 26, height: 1.77},
//   {name: 'Joaquin', age: 25, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
// ]
function specialSort(array, swapFunction) {
  // Tu código aca:
  let swap = true;

  while (swap) {
    swap = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (swapFunction(array[i], array[i + 1]) === -1) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swap = true;
      }
    }
  }

  return array;
}

//Mi test -------
// function functionOne(el1, el2) {
//   if (el1.height > el2.height) return -1;
//   return 1;
// }

// console.log(
//   specialSort(
//     [
//       { name: "Cristian", age: 26, height: 1.85 },
//       { name: "Dylan", age: 30, height: 1.75 },
//       { name: "Joaquin", age: 25, height: 1.77 },
//     ],
//     functionOne
//   )
// );
//------------------
