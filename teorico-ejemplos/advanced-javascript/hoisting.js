bar();
console.log(foo);

//Las funciones las eleva enteras, por eso si muestra el código dentro de la misma.
function bar() {
    console.log('Soy una función');
}
//Eleva la declaración de la variable pero no su definición. Por eso muestra undefined. 
var foo = 'Hola, me declaro, esto no va salir porque no se eleva definición del valor';

//Let o const no se eleva la declaración. En ese caso, si let estuviera luego del 'console.log' daría error.
let noEleva = 'Con let no se eleva la declaración';
console.log(noEleva);

//--------------------------------------------------------------------------------------------------

// OTRO EJEMPLO, en este caso eleva las funciones con su contenido, pero al momento invocar a las funciones (que devuelven unas variables declaradas fuera de las mismas) todavía no llegó a la definición de dichas variables (first y last) por eso también devuelven undefined.
function saludarPersona () {    
    /* Primero eleva en 'fase de creación o parseo':
    var first;
    var last;
    function firstName() {...}
    function lastName() {...} */

    console.log('Hola' + ' ' + firstName() + ' ' + lastName());

    function firstName() {
        return first;
    }
    function lastName() {
        return last;
    }

    var first = 'Nicolas';
    var last = 'Caceres';
}

saludarPersona();
