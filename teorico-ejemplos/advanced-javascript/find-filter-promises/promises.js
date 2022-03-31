const { getHeroeById, getHeroeByOwner } = require('./index.js');

function getHeroeByIdAsync(id) {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			const heroe = getHeroeById(id);

			if (!heroe) return reject('No se encuentra el heroe');
			if (heroe) return resolve(heroe);
		}, 1000)
	);
}

//Si el heroe existe lo devuelve, sino manda mensaje 'No se encuentra el heroe
getHeroeByIdAsync(2)
	.then((heroe) => console.log(heroe))
	.catch((err) => console.warn(err));
//la siguiente linea es lo mismo que la de arriba
// .catch(console.warn)
