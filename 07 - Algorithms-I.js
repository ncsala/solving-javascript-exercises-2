//----------------------------------------------------------------
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let numeroIncremental = 2;
  let arrayResultado = [1];

  while (num > 1) {
    numeroIncremental = 2;

    while (num % numeroIncremental != 0) {
      numeroIncremental++;
    }

    arrayResultado.push(numeroIncremental);
    num /= numeroIncremental;
  }

  return arrayResultado;
}
//----------------------------------------------------------------

//----------------------------------------------------------------
function bubbleSort(ar) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;

  while (swap) {
    swap = false;
    for (let i = 0; i < ar.length - 1; i++) {
      if (ar[i] > ar[i+1]){
        const aux = ar[i+1];
        ar[i+1] = ar[i];
        ar[i] = aux;
        swap = true;
      }
    } 
  }

  return ar;
}
//----------------------------------------------------------------


//----------------------------------------------------------------
function insertionSort(ar) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:  let positionA = 0;
  for (let i = 1; i < ar.length; i++) {
    let j = i - 1; // j parte del anterior al actual
    let aux = ar[i];

    while (j >= 0 && aux < ar[j]) {
      ar[j + 1] = ar[j];
      j--;
    }
    ar[j + 1] = aux;
  }

  return ar;
}
//----------------------------------------------------------------

// console.log(insertionSort([24, 10, -55, 23, -3000, -2999, -3001 ,22,21,20, 2, 1543]));

//----------------------------------------------------------------
function selectionSort(ar) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < ar.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[min] > ar[j]) {
        min = j;
      }
    }

    if (i !== min) {
      // es para comprobar que si sigo parado en el mismo lugar no hacer cambio
      // podría hacerse sin el if
      let aux = ar[i];
      ar[i] = ar[min];
      ar[min] = aux;
    }
  }

  return ar;
}
//----------------------------------------------------------------

console.log(selectionSort([24, 10, -55, 23, -3000, -2999, -3001, 22, 21, 20, 2, 1543]));

//----------------------------------------------------------------
function miPropioAlgoritmoDeBusqueda(ar) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let positionA = 0;
  let positionM = 1;
  let aux = 0;

  while (positionA < ar.length - 1) {
    if (ar[positionM] < ar[positionA]) {
      aux = ar[positionA];
      ar[positionA] = ar[positionM];
      ar[positionM] = aux;
    }
    // console.log(positionA,positionM);
    if (positionM != ar.length - 1) {
      positionM += 1;
    }

    if (positionM == ar.length - 1) {
      positionA += 1;
      positionM = positionA + 1;
    }
  }

  return ar;
}
//----------------------------------------------------------------

