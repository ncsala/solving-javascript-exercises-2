function decirHolaUsuario(usuario) {
    return `Hola ${usuario}!`;
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}
//Mando como argumento una funcion, en este caso decirHolaUsuario
console.log(
    crearSaludo('Nicolás', decirHolaUsuario)
    );
    

//--------------------------------------------------------------------
function multiplicaPorDos(numero, funcion) {
    return funcion(numero);
}

//Mando la funcion pero escrita en el mismo lugar del argumento
console.log(multiplicaPorDos(15, function(elMismoNumero) {return elMismoNumero * 2}));



//----------------------------------------------------------------------
//Callbaks con arreglos 

//metodo forEach
let alumnos = ['nico','mati','damian','agustina','pepe'];


// alumnos.forEach(
//     function(elemento, indice) {
//         console.log('Alumno', elemento, indice);
//     })

//con funcion flecha
alumnos.forEach(
        (elemento, indice) => 
            console.log('Alumno', elemento, indice)
        )

//metodo map
let numeros = [1,5,10,15];
let dobles = numeros.map(function(numero) {return numero * 2})
console.log(dobles)