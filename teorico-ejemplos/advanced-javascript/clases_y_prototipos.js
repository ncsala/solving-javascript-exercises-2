// function Auto(marca, modelo, color) {
//     this.marca = marca || 'Fiat'; 
//     this.modelo = modelo || 'Uno';
//     this.color = color || 'Bordo';
// }

// let auto1 = new Auto('Mercedes', 'Ultimate', 'Plateado');
// console.log(auto1);

//Esto seria una clase en javascript----------------------------------------------------------------
//Mas fiel a lo que es javascript
//Defino la clase (mas bien el constructor)
function Persona(nombre, edad) {
    this.nombre = nombre || 'Mandrake';
    this.edad = edad || 35;
};
//Defino el prototipo, son metodos que van a tener todos los objetos de esa clase
Persona.prototype.getEdad = function () { 
    return `La edad de ${this.nombre} es ${this.edad}`;
}
//------------------------------------------------------------------------------------------------

//Esto es una clase en javascript emulando lo que seria un lenguaje como Java-------------------------------
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre || 'Mandrake';
//         this.edad = edad || 35;
//     }
//     //Defino el prototipo, son metodos que van a tener todos los objetos de esa clase
//     getEdad() {
//         return `La edad de ${this.nombre} es ${this.edad}`;
//     }
// };


//------------------------------------------------------------------------------------------------

let persona1 = new Persona('Juan',40);
let persona2 = new Persona('',80);
let persona3 = new Persona('Nicolas');

console.log(persona1);
console.log(persona2);
console.log(persona3);

//Cuando voy a buscar la edad de cada uno me devuelve el metodo de del prototipo
console.log(persona3.getEdad());

//Acá defino un metodo propio para la persona dos, por tanto ya no usará prototype
persona2.getEdad = function() {
    return `La edad de ${this.nombre} es ${this.edad / 4}`;
} 

console.log(persona2.getEdad());

