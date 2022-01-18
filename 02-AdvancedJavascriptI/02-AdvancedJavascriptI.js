


//-------------------------------------------------------------------------

// Coerción de Datos

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
console.log([3]+[3]-[10]); // output: 23 // cuando hay array de un solo numero: si se suman convierte a string y concatena sino resta.
console.log(3>2>1); // output: false // |((3>2) > 1)| =>  |(3>2) => true|  |true > 1 (1>1) => false|
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

//------------------------------------------------------------------------

