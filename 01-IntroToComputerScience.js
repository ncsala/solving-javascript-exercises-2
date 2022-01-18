
function BinarioADecimal(num) {
    // tu codigo aca
    let suma = 0;
    let lugarEnArray = 0;

    for (var potencia = num.length - 1; potencia >= 0; potencia--) {
        lugarEnArray = (num.length - 1) - potencia;
        if (num[lugarEnArray] == 1) {
            suma += Math.pow(2, potencia);
        }
    }

    return suma;
}

console.log(BinarioADecimal('111010100111'));

//------------------------------------------------------

function DecimalABinario(num) {
    // tu codigo aca
    let resto = 0;
    let concatenacion = '';

    while (num > 0) {

        if (num == 100) {
            let numero = 50;
        }
        resto = num % 2;
        num = Math.floor(num / 2);
        concatenacion = resto + concatenacion;
    }

    return concatenacion;
}

console.log(DecimalABinario(99));

