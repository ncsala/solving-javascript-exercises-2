// Permite código asíncrono basado en procemsas sin necesidad de encadenar explícitamente promesas

const resolveAfter2Seconds = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
};

const asyncCall = async () => {
    console.log('calling');
    // await espera a que la promesa se resuelva
    // await es una forma de simplificar el código de una función asíncrona.
	const result = await resolveAfter2Seconds()
    // Se ejecuta después de que la promesa se resuelva, sino tuviera un await. Se ejecutaria primero el console.log sin la promesa resuelta
    console.log(result); // "resolved"

    // implicitamente -> return undefined;
};

asyncCall();

// A su vez las funciones async devuelven una promesa.
const promiseB = asyncCall()
// 'promiseB' se resuelve o se rechaza dependiendo del valor que retorne la función asíncrona. En este caso particular
// se resuelve a undefined. {resolved, undefined}

// Se pueden seguir concatenando promesas
const promiseC = promiseB.then((data) => {console.log(data)})