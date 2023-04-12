function BinarioADecimal(num) { // Recibe un String y retorna num
    //Convertir de Binario a decimal
    //Recibo un 0111 y regreso un 7
    // 2 elevado a la posición por el número
    // 2**posición menos significativa * Número
    //console.log(typeof num);
    let resultado=0;

    for (let i = num.length-1; i>=0; i--){
        resultado += (2**i)*num[num.length-1-i]
        console.log(resultado);
    }
    return resultado;
}
BinarioADecimal('01111')