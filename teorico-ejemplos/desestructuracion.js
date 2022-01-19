const persona = {
    firstName: 'John',
    lastName: 'Pepinillo'
}

// La manera clásica de imprimir los nombres
const firstName = persona.firstName;
const lastName = persona.lastName;
console.log(firstName, lastName);

// Con la desestructuración 
const {firstName2, lastName2} = persona;
console.log(firstName, lastName);
