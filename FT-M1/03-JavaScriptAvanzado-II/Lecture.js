
//Closures
//Son funciones que retornan otras funciones, las cuales pueden acceder al contesto de su función padre y obtener
//información de allí.

// function saludar(saludo){
//     return function (nombre){
//         console.log(saludo+ ' '+ nombre);
//     }
// }
// var saludaHola= saludar('Hola')
// saludaHola('Toni');


// var contenedor = function(){
//     let caja = [];

//     return function(item){
//         caja.push(item);
//         console.log(caja);
//         return caja;
//     }
// }

// var cont = contenedor();
// cont ('objeto1');
// cont ('objeto2');


// function contenedor(){
//     var caja = [];

//     return function(item){
//         caja.push(item);
//         return caja;
//     }
// }

// var miContenedor= contenedor();
// console.log(miContenedor('Libro'));
// console.log(miContenedor('Disco'));
// console.log(miContenedor());

// function suma (a,b){
//  let sum = a + b
//  let mul = a * b

//  return function (){
//     var resultado = sum * mul 
//     return resultado;
//  }
// }

//  var miOperacion = suma(1,3);
//  console.log(miOperacion());

//Closure 
// *Función que retorna una función.
// *La función hija debe utilizar una variable de su padre.
// Sin las dos anteriores no existe una closure.

//Métodos de un contexto.
//Tienen la propiedad this y nos permite apuntar y modificar valores.

//Bind.
//Amarra una función (Clona o copia) a un objeto.

// var persona ={
//     nombre: 'Emmanuel',
//     apellido: 'Mercado'
// }

// function saludar (){
//     console.log('Hola, mi nombre es', this.nombre);
// }

// var saludarPersona = saludar.bind(persona);
// saludarPersona();

// Tambien permite fijarle un parámetro

// var persona ={
//     nombre: 'Emmanuel',
//     apellido: 'Mercado'
// }

// function saludar (Saludo,a){
//     console.log(Saludo,', mi nombre es', this.nombre);
//     console.log(a);
// }

// var saludarPersona = saludar.bind(persona,1,'holis');
// saludarPersona( );

//Call 
//Mismo funcionamiento del Bind pero se ejecuta en el momento.
//No es reutilizable.

// var persona ={
//     nombre: 'Emmanuel',
//     apellido: 'Mercado'
// }

// function saludar (Saludo){
//     console.log(Saludo, 'mi nombre es', this.nombre);
//     console.log(a);
// }

// saludar.call(persona,'Hola')

//Apply 
//Funciona exactamente igual que el Call pero los argumentos se le pasan adentro de un arreglo

var persona ={
    nombre: 'Emmanuel',
    apellido: 'Mercado'
}

function saludar (Saludo,a,b){
    console.log(Saludo, 'mi nombre es', this.nombre);
    console.log(a);
    console.log(b);
}

saludar.apply(persona,['Hola',1,2]);



