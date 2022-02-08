// Linked-lists:  nodo1---> nodo2---> nod3


// se define el nodo. Toma como parametro data que es el valor a ingresar al nodo.
// ejemplo: const nuevoNodo = new Node('Nicolas') ---> Node { data: 'Nicolas', next: null } 
function Node(data) {
    this.data = data;
    this.next = null;
}

// se define la lista con su cabecera en null
// ejemplo: const nuevaLista = new List() ----> List { _length: 0, head: null }
function List() {
    this._length = 0;
    this.head = null;
}

// Ej. List.add('Nicolas'); 
// Ej. List.add('Martin'); 

List.prototype.add = function (data) {
    const node = new Node(data); // se crea una instancia del nodo. // Ej. {data: 'Nicolas', next: null}
    let current = this.head; // se inicializa current con lo que tenga en la cabecera // Ej. Null

    // SI LA LISTA ESTÁ VACÍA, o sea si head es igual a null
    // recordar que antes inicializamos current con el valor de head
    if (current === null) { // otra forma es: if(!current) 
        // Agregamos el primer nodo
        this.head = node; // ahora el nodo que creamos va a estar apuntado por la head // ej. 'Nicolas'
        this._length++; // aumentamos el largo de la lista
        return node; // retorna el nodo y sale de la funcion
    }

    // SI LA LISTA NO ESTÁ VACÍA, se recorre hasta encontrar el último nodo
    while (current.next !== null) { // mientras en next haya valores // tmb se puede hacer solo (current.next)
        current = current.next; // vamos actualizando current
    }

    current.next = node; // agrega un nodo a lo ultimo, o sea agrega al nodo que creamos al principio 'Martin'
    this._length++;
    return node
}

const miLista = new List();
miLista.add('Nicolas');
miLista.add('Agustina');
miLista.add('Tincho');
console.log(miLista.head);


//---------------------------------------------------------------------------------------------------
// Otra posibilidad para el método add

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


