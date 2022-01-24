function direcciones(laberinto, direccion) {
  if (laberinto.N === "destino") {
    direccion += "N";
  } else if (laberinto.N != "pared" && laberinto.N != "destino") {
    direccion += "N";
    return direcciones(laberinto.N, direccion);
  }

  if (laberinto.S === "destino") {
    direccion += "S";
  } else if (laberinto.S != "pared" && laberinto.S != "destino") {
    direccion += "S";
    return direcciones(laberinto.S, direccion);
  }

  if (laberinto.E === "destino") {
    direccion += "E";
  } else if (laberinto.E != "pared" && laberinto.E != "destino") {
    direccion += "E";
    return direcciones(laberinto.E, direccion);
  }

  if (laberinto.O === "destino") {
    direccion += "O";
  } else if (laberinto.O != "pared" && laberinto.O != "destino") {
    direccion += "O";
    return direcciones(laberinto.O, direccion);
  }
  // console.log(direccion);
  return direccion;
}

// let laberintoExample = {
//   N: "pared",
//   S: {
//     N: "pared",
//     S: "pared",
//     E: { N: "destino", S: "pared", E: "pared", O: "pared" },
//     O: { N: "pared", S: "pared", E: "pared", O: "pared" },
//   },
//   E: "pared",
//   O: "pared",
// };

let laberintoExample = {
  N: "pared",
  S: "pared",
  E: "pared",
  O: {
    N: "pared",
    S: {
      N: "pared",
      S: "pared",
      E: { N: "pared", S: "pared", E: "destino", O: "pared" },
      O: "pared",
    },
    E: { N: "pared", S: "pared", E: "pared", O: "pared" },
    O: { N: "pared", S: "pared", E: "pared", O: "pared" },
  },
};

let direccion = "";
// console.log(laberintoExample['N']);
console.log(direcciones(laberintoExample, direccion));
// console.log(laberintoExample.N);
