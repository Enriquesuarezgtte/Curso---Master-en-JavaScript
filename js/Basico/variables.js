'use strict'

// Prueba con var 
var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}
console.log("prueba con var " + numero);
console.log("********");

//Prueba con LET
var texto = "Curso JS"
console.log(texto);

if (true) {
    let texto = "Enrique";
    console.log(texto);

}
console.log("Prueba con let " + texto);

//Prueba con const
console.log("********");

var web = "www.google.com"
const ip = "192.168.0.1"
console.log(web);
console.log(ip);

web = "www.google.com.co"
ip = "192.168.0.12"
console.log(web);
console.log(ip);