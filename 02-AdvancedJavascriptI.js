// EJERCICIOS JAVASCRIPT

// SCOPE & HOISTING

// Determiná que será impreso en la consola, sin ejecutar el código.

// Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

//------
x = 1; // S
let a = 5;
let b = 10;

let c = function (a, b, c) {
    // a=8, b=9, c=10
    let x = 10;
    console.log('x = ' + x); // output: 10
    console.log('a = ' + a); // output: 8

    let f = function (a, b, c) {
        // a=8, b=9, c=10
        b = a; // b = 8
        console.log('b = ' + b); // output:8
        b = c; // c = 10
        let x = 5;
    }

    f(a, b, c);
    console.log('b = ' + b); // output: 9
}

c(8, 9, 10);
console.log('b = ' + b); // output: 10
console.log('x = ' + x); // output: 1
//------

//------
/* console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2; */
//------

//------
// Imprime Franco porque la redefinimos dentro del if, si fuera una función sería diferente
// Si usaramos let como se debería, imprimiría Tony
var instructor = "Tony";
if (true) {
    var instructor = "Franco";
}
console.log(instructor); // output: Franco
//------

//------
var instructor = "Tony";
console.log(instructor); // output: Tony

(function () {
    if (true) {
        var instructor = "Franco";
        console.log(instructor); // Franco -> porque estamos dentro del contexto de la función
    }
})();

console.log(instructor); // output: Tony -> porque estamos en el contexto global
//------

//------
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // output: The Flash
    console.log(pm); // output: Reverse Flash
}
console.log(instructor); // output: The Flash
console.log(pm); // output: Franco
//------

//-----------------------------------------------------------------------------------------------------------------------------

// COERCIÓN DE DATOS

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

console.log(6 / "3");  // output: 2 // convierte el string '3' a número
console.log("2" * "3"); // output: 6 // convierte ambas string a número
console.log(4 + 5 + "px"); // output: 9px // primero suma los numeros luego convierte string y concatena
console.log("$" + 4 + 5); // output: $45 // convierte todo string y concatena
console.log("4" - 2); // output: 2 // convierte numero y resta
console.log("4px" - 2); // output: NaN Not a Number
console.log(7 / 0); // output: Infinity // como si fuera un limite
console.log({}[0]); // output: undefined
console.log(parseInt("09")); // output: 9
console.log(5 && 2); // output: 2 // mientras el primero sea diferente de '0', esto da true y siempre devuelve el segundo número
console.log(0 && 5); // output: 0 // igual anterior, solo en caso de q el primero sea '0' entonces devuelve '0'
console.log(5 || 0); // output: 5 // devuelve cualquiera de los dos que sea true (distinto de 0)
console.log(0 || 4);
console.log([3] + [3] - [10]); // output: 23 // cuando hay array de un solo numero: si se suman convierte a string y concatena sino resta.
console.log(3 > 2 > 1); // output: false // |((3>2) > 1)| =>  |(3>2) => true|  |true > 1 (1>1) => false|
console.log([] == ![]); // output: true // el primero es objeto y el segundo es booleano -- mirar abajo ya que hay varios pasos en medio

// Explicacion de ([] == ![])
/* Here, x is [], and y is ![]. Also,

typeof([]) // "object"
typeof(![]) // "boolean"
Since y is a boolean and x is an object, condition 7 is the first to hold:

If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).

What’s the value of ToNumber(y)?

Number(![]) // 0
because [] is a truthy value, negating makes it false. Number(false) is 0

Now we have the comparison: [] == 0.

Since typeof(0) is "number", condition 8 now holds:

If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.

ToPrimitve(x) is like x.toString().

[].toString() // ”” - the empty string
Almost done we now face with the comparison: “” == 0

Now, condition 5 holds:

If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.

ToNumber(“”) // 0
Finally both operands have the same type and condition 1 holds. */

//-----------------------------------------------------------------------------------------------------------------------------

// HOISTING

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//------
function test() {
    console.log(a); // output: undefined
    console.log(foo()); // output: 2

    var a = 1;
    function foo() {
        return 2;
    }
}

test();
//------

// Y el de este código? :

//------
var snack = 'Meow Mix';

function getFood(food) {
    // food = false
    // var snack; // eleva declaracion de la variable aunque no entre al if, por eso da undefined

    // No entra al if // si fuera una function iría a buscar el snack de afuera y daría 'Meow Mix'
    if (food) { 
        var snack = 'Friskies';
        return snack;
    }
    return snack; // retorna undefined 
}

console.log(getFood(false)); // output: undefined
//------

// THIS

// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = 'Juan Perez';

var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa // IMPORTANTE: Como metodo siempre va apuntar a su objeto

var test = obj.prop.getFullname; // no invoca el metodo, solo guarda la funcion en test 
//                                                    function () {
//                                                        return this.fullname;
//                                                    }

console.log(test()); // 'Juan Perez' en el navegador y 'undefined' en node

//-----------------------------------------------------------------------------------------------------------------------------

// EVENT LOOP

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
    console.log(1);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    console.log(4);
}

printing(); // 1, 4, 3, 2
