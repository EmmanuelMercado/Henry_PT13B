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


function DecimalABinario(num) {
    //Convertir de Decimal a Binario
    //Dividir entre 2 hasta sea 0 y tomar los residuos
    //36 / 2 = 18 Residuo 0
    //18 / 2 = 9 Residuo 0
    //9 / 2 = 4 Residuo 1
    //4 / 2 = 2 Residuo 0
    //2 / 2 = 1 Residuo 0
    //1 / 2 = 0 Residuo 1
    //100100

    let resultado = "";
    while(num>0){
        if(num%2==0){
            resultado = '0'+resultado
        }
        else{
            resultado = '1'+resultado
        }
        console.log(resultado);
        num=Math.floor(num/2) 
    }
}
DecimalABinario(36);