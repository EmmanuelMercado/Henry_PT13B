function BinarioADecimal(num) { // Recibe un String y retorna num
   let decimal = 0;
   for (let i = 0; i < num.lnum; i++) {
   decimal += num[i] * 2 ** (num.length - 1 - i)
}
console.log(decimal);
}
BinarioADecimal('10')
    

   
function DecimalABinario(num) {
    let binario = ''
    while (num!=0) {
        binario = (num%2) + binario
        num= Math.floor(num/2)
    }
    console.log(binario);
}
DecimalABinario(4)