function* generatorFunction() {
    console.log('Iniciando Generator Function');
    yield 'Hola' // Se aplica pausa
    yield 'Mundo' // Se aplica pausa
    console.log('Terminando Generator Function');
}

// Generator function devuelve un objecto 
const generatorObject = generatorFunction()


// La funcion no se ejecuta hasta que se llama a next()
console.log(generatorObject.next()) // { value: 'Hola', done: false }
console.log(generatorObject.next()) // { value: 'Mundo', done: false }
// Cuando no tiene mas nada para ejecutar devuelve un objeto con done: true
console.log(generatorObject.next()) // { value: undefined, done: true }