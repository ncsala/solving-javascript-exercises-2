//Ejemplo de promesa

const fs = require('fs');

const promesa = new Promise((resolve, reject) => {
	fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
		if (err) reject(err);
		if (!err) resolve(data);
	});
});

// promesa -> {status, value, then}
// status = [pending, fulfilled, rejected]
// value -> fulfilled: value
//       -> rejected: reason (se llama reason pero en realidad sigue siendo value)
// .then(succesHandler, errorHandler)

// promesa = {status: fulfilled, value: 'hola', then:function}
// Cuando da resultado hago algo con la promesa, por ejemplo consologuear
promesa.then((value1) => console.log('Promesa 1 -', { value1 })); // console.log -> 'hola'

//----------------------------------------------------------------
const promesa2 = new Promise((resolve, reject) => {
	fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
		if (err) reject(err);
		if (!err) resolve(data);
	});
});

// promesa2 = {status: fulfilled, value: 10, then:function}
promesa2
	.then((value2) => Number(value2) + 5)
	.then((data1) => console.log('Promesa 2 -', { data1 })) // console.log -> '15'
	.catch((error1) => console.log({ error1 })); // a este no llegamos pq no lo hicimos fallar

// La promesa original conserva su valor original
promesa2.then((value3) =>
	console.log('Promesa 2 - conserva valor original -', { value3 })
);

//----------------------------------------------------------------
const promesa3 = new Promise((resolve, reject) => {
	reject(20);
});

// Si tengo un errorHandler definido con un retorno, la siguiente promesa se va a
// resolver al valor de retorno del errorHandler
promesa3
	.then(null, (error2) => {
		return error2;
	})
	.then((value4) => console.log('Promesa 3 - Resuelta -', { value4 }));

// si tengo un errorHandler o succesHandler definidos y quiero q la promesa siguiente sea rechazada
// tengo q si o si arrojar(throw) un error
promesa3
	.then(null, (error3) => {
		throw error3 + 5;
	})
	// .then(e => {throw e+15}, null) //Si viniera como resuelta tmb se puede arrojar para rechazo
	.then(null, (error4) =>
		console.log(
			'Promesa 3 - Se arroja error en promesa anterior para que no se resuelva -',
			{ error4 }
		)
	);

//----------------------------------------------------------------

const promesa4 = new Promise((resolve, reject) => {
	resolve(50);
});

// venia resulta en 50
promesa4
	.then((data) => data + 5) // 55
	.then((value) => value + 10) //65
	.then((values) => {
		throw values;
	}) //65 se arroja a rejected
	.then(null, (e) => e + 5) // 70 errorHandler para manejar el rejected
	.then((data) => console.log('Promesa 4 -', data)); //consologuea -> 70
