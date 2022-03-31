let heroes = require('./heroes.js');

const getHeroeById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
};

const getHeroesByOwner = (owner) => {
	return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroeById(5));
console.log(getHeroesByOwner('DC'));
