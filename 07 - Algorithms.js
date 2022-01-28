function selectionSort(ar) {
  let positionA = 0;
  let positionM = 1;
  let aux = 0;

  while (positionA < ar.length - 1) {
    if (ar[positionM] < ar[positionA]) {
      aux = ar[positionA];
      ar[positionA] = ar[positionM];
      ar[positionM] = aux;
    }

    if (positionM == (ar.length-1)) {
      positionA += 1;
      positionM = positionA + 1;
    }
    else if (positionM < (ar.length-1)) {
      positionM += 1;
    }
  }

  return ar;
}

console.log(selectionSort([24, 10, -55, 23, -3000, -2999, -3001 ,22,21,20, 2, 1543]));
// // console.log(selectionSort([1, 24, 10, -55, 4, 3, 30, 73,-100, 100, 23, 62, 15, 80,2]));

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // if (num == 1) return ;
  // num = 315
  let numeroIncremental = 2;
  let arrayResultado = [1];
  
  while (num > 1) {
    numeroIncremental = 2;

    while ((num % numeroIncremental) != 0) {
      numeroIncremental++;
    }

    arrayResultado.push(numeroIncremental);
    num /= numeroIncremental;
  }

  return arrayResultado;
}

console.log(factorear(654984984));
