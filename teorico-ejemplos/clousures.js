// Ejemplo 1
function saludar(saludo) {
    return function (nombre) {
        console.log(saludo + ' ' + nombre);
    }
}

var saludarHola = saludar('Hola'); // Esto devuelve una función

saludarHola('Toni'); // 'Hola Toni'

//------

// Ejemplo 2
var creaFuncion = function () {
    var arreglo = [];

    for (var i = 0; i < 3; i++) {
        arreglo.push(
            function () {
                console.log(i);
            }
        )
    }
    return arreglo;
}

var arr = creaFuncion();

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3


