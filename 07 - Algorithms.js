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
    // console.log(positionA,positionM);
    if (positionM != (ar.length-1)) {
    positionM += 1;
    }
  }

  return ar;
}
            //                          8   9   length = 10
console.log(selection([10, -2, -7, 4]));
