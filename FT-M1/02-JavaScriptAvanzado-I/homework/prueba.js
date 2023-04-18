/*x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //10
   console.log(a); //8
   var f = function (a, b, c) {
      b = a;
      console.log(b); //8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1



console.log(bar); //undefined
console.log(baz); //Not defined
foo(); 
function foo() {
   console.log('Hola!');  //Hola! 
}
var bar = 1;
var baz = 2;

var instructor = 'Tony';  
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //Franco

var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); //Tony

console.log({}[0])*/

const { log } = require("console")




// var c = 20;
// let d = 10;

// function Prueba(){
   
//    console.log(c);
//    console.log(d);
// }

// Prueba();


let instructor = 'Tony'
if(true){
   let instructor = 'Franco'
   console.log(instructor);
   
}
console.log(instructor);