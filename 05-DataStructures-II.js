"use strict";
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function LinkedList() {
    this._length = 0;
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);
    if (!this.head) {
        // si la cabeza esta vacía
        this.head = newNode;
        this._length++;
    } else {
        // si la cabeza no esta vacía
        let current = this.head; // lo definimos con lo que tenga en la cabeza
        while (current.next) {
            // mientras existan otros nodos en la propiedad next
            current = current.next;
        }
        current.next = newNode;
    }
};

LinkedList.prototype.remove = function (value) {
    if (!this.head) return null; // cuando no existen nodos
    if (!this.head.next) { // cuando existe un solo nodo
        const value = this.head.value;
        this.head = null;
        return value;
    }
    let current = this.head;
    while (current.next.next) { // cuando la lista tiene mas de un nodo // si hay dos nodos siguiente // current.next.next = null
        current = current.next; // me quedo con el penultimo nodo, el que no tiene null
    }
    value = current.next.value;
    current.next = null;
    return value;
    // this._length--;
};

LinkedList.prototype.search = function (valueOrCallBack) {
    if (!this.head) return null;
    if (typeof valueOrCallBack === 'function') {
        if (valueOrCallBack(this.head.value)) return this.head.value; // cuando encuentra el valor buscado con la funcion
    } else {
        if (this.head.value === valueOrCallBack) return this.head.value; // cuando encuentra la string igual al value
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
        if (typeof valueOrCallBack === 'function') {
            if (valueOrCallBack(current.value)) return current.value;
        } else {
            if (current.value === valueOrCallBack) return current.value;
        }
    }
    return null;
};

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
}

HashTable.prototype.hash = function(key) {
    let sum = 0;
    for (let i=0; i<key.length; i++) { 
        sum += key.charCodeAt(i); // se suma el valor de cada letra en codigo unicode
    }
    
    return sum % this.numBuckets; // hacemos el modulo simplemente pq es lo q pide la letra
};

HashTable.prototype.set = function(key, value) {
    if (typeof (key !== 'string')) throw new TypeError('Keys must be string');
    let dondeGuardo = this.hash(key); // se llama función hash para que devuelva dónde hay que guardarlo

    // el siguiente condicional es para evitar colisiones, creo objeto y luego agrego propiedades
    if (this.buckets[dondeGuardo] === undefined) {
        // ejemplo si dondeGuardo = 3 => this.buckets[3] = [,,, {}]
        this.buckets[dondeGuardo] = {}; // me creo un objeto en la posicion  'dondeGuardo' dentro del array
    }

    // agrego la propiedad con key
    // ejemplo, this.buckets[3] = this.buckets[3] = [,,, {key: value}]
    this.buckets[dondeGuardo][key] = value;
};

HashTable.prototype.get = function(key) {
    let dondeRecupero = this.hash(key); // se llama hash para saber donde recuperar
    return this.buckets[dondeRecupero][key];
};

HashTable.prototype.hasKey = function(key) {
    let existe = this.hash(key);
    return this.buckets[existe].hasOwnProperty(key);
};

