'use strict'

var texto = "Curso JavaScript en psl en la sede de psl calle 10";


var busqueda = texto.search(/PSL/i);
console.log(busqueda);
console.log(texto.indexOf("PSL"));

console.log(texto.match(/psl/g));

console.log(texto.endsWith("calle 10"));

console.log(texto.includes("sede "));

console.log((texto.replace("calle 10", "calle 100")));
console.log(texto.slice(6));