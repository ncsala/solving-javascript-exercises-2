
// BIND

// Una función del bind es para apuntar el this a donde queremos
//-----
var persona = {
    nombre: 'Franco',
    apellido: 'Chequer',
}

var logNombre = function () {
    console.log(this.nombre);
}

logNombre(); // undefined / pq this apunta al objeto global no al objeto persona 

// Con bind hacemos apuntar la función al objeto 'persona'
var logNombrePersona = logNombre.bind(persona); 

logNombrePersona(); // Franco
//-----

// Otra función del bind
// Veamos otro mini patron: function currying, este involucra bind. Como bind crea una nueva función, si le pasamos parámetros, 
// estos quedan fijos en la nueva función. En el ejemplo no vamos a bindiar this con nada, pero si unos parámetros. Digamos que 
// tenemos una función que multiplica dos números recibidos por parámetro. Y nos gustaría construir una función que multiplique 
// un número recibido por argumento por dos. Para esto podríamos usar bind y le pasamos cómo primer parámetro this (en este caso 
//     this hace referencia al contexto global), y como segundo parámetro un 2. Guardamos el resultado en una nueva variable:

//-----
function multiplica(a, b) {
    return a * b;
}

var multiplicaPorDos = multiplica.bind(this, 2);

console.log(multiplicaPorDos(3));
// De esta forma, tenemos una nueva función donde el parámetro a es siempre 2, gracias a bind. Nótese, que dentro de multiplicaPorDos, 
// this sigue haciendo referencia al objeto global, porque cuando lo bindeamos le pasamos ese parámetro.
//-----

//--------------------------------------------------------------------------------------------------

// CALL (Similar al Bind)

// Utilizamos el mismo ejemplo de arriba pero ahora con call
//-----
var persona = {
    nombre: 'Franco',
    apellido: 'Chequer',
}

var logNombre = function () {
    console.log(this.nombre);
}

// logNombre(); // undefined / pq this apunta al objeto global no al objeto persona 

/* // Con bind hacemos apuntar la función al objeto 'persona'
var logNombrePersona = logNombre.bind(persona); 
logNombrePersona(); // Franco */

// Con Call hacemos lo mismo que estas dos lineas de arriba comentadas. Pero en una linea sola
// La desventaja es que no me queda guardado, es de única ejecución.
logNombre.call(persona);
//-----

