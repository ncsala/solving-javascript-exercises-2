// Como JavaScript tiene dynamic typing, a veces el intérprete sólo cambia el tipo de datos de un valor a otro. 
// Esto es conocido como Coercion.
// Cuando hacemos 'var a = 1 + 'un texto', devuelve '1untexto'. Ya que convierte 1 a texto y luego concatena.

Number('3'); // devuelve 3
Number(false); // devuelve 0
Number(true); // devuelve 1
Number(undefined); // devuelve NaN
Number(null); // devuelve 0

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#a_model_for_understanding_equality_comparisons