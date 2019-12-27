'use strict'

var array = new Array();

for (let i = 0; i < 6; i++) {
    array.push(prompt("Ingrese número " + (i + 1)));
    document.write("<li> " + array[i] + "</li>");
    console.log(array[i]);
}

console.log("***********************");
array.forEach(value => {
    document.write("<li> " + value + "</li>");
    console.log(value);

});
console.log("***********************");
console.log(array.sort());
console.log(array.reverse());
console.log(array.length);
var elemento = prompt("Elemento a buscar");
var find = array.findIndex(val => val == elemento);
console.log(find + " " + array[find])