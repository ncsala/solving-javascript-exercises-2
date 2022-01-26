function selection(ar) {
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

// console.log(selection([1, 24, 10, -55, 4, 3, 30, 73,-100, 100, 23, 62, 15, 80,2]));
console.log(selection([24, 10, -55, 23,22,21,20, 2]));