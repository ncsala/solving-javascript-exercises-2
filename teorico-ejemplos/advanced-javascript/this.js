
// 1. CONTEXTO GLOBAL INICIAL

// Esto solo funciona en navegador, el objeto global se llama window, y this hace referencia a ese objeto
// console.log(this === window); 

// this se refiere al objeto global
this.a = 37;
console.log(this.a); // 37

//-----------------------------------------------------------------

// 2. EN EL CONTEXTO DE UNA FUNCIÓN
// Va a depender de como sea invocada la función


// 2.a) Llamadas Simples

/* function f1() {
    return this;
}

 // global object Solo en navegador pq window es el objeto global allí
f1() === window; */

// 2.b) Cómo un Método de un Objeto
// Cuando usamos el keyword this dentro de una función que es un método de un objeto, this toma hace referencia 
// al objeto sobre el cúal se llamó el método:

//------
var o = {
    prop: 37,
    f: function() {
        return this;
    }
};

console.log(o.prop); 
// this hace referencia a 'o'
//------

//------
var o = {prop:37};

function loguea() {
    return this.prop;
}

// Notese que si ponemos un 'console.log' acá, hace referencia al objeto global
// y el resultado sera undefined ya que no tiene la propiedad '.prop'
console.log(loguea()); 

//agregamos la función como método del objeto `o`
o.f = loguea;

console.log(o.f());
// pero acá el resultado es le mismo que el ejemplo anterior
//------

// De todos modos, hay que tener cuidado con el keyword this, ya que pueden aparecer casos donde es 
// contraintuitivo ( Como varias cosas de JavaScript ). Veamos el siguiente ejemplo:

//------
var obj = {
    nombre: 'Objeto',
    log: function () {
        this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
        console.log(this)  // obj

        var cambia = function (str) {
            this.nombre = str;  // Uno esperaria que this sea `obj`
        }

        cambia('Hoola!!');
        console.log(this);
    }
}

obj.log();
// Notese que en este caso, no cambia el nombre por la string 'Hoola!!', y eso se debe a que no el
// this dentro de la 'funcion cambia()' hace referencia al objeto global nuevamente.
//------

// Para resolver este tipo de problemas existe un patrón muy común, y se basa en guardar la referencia 
// al objeto que está en this antes de entrar a una función donde no sé a ciencia cierta que valor puede tomar this:

var obj = {
    nombre: 'Objeto',
    log: function () {
        this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
        console.log(this)  // obj

        let that = this; // IMPORTANTE Guardo la referencia a this

        let cambia = function (str) {
            that.nombre = str;  // Uso la referencia dentro de esta funcion
        }

        cambia('Hoola!!');
        console.log(this);
    }
}

obj.log();
// Acá si imprimimos en el segundo caso la string 'Hoola!!'