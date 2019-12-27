'use strict'

//arrays

var lenguajes = new Array("JAVA", "PHP", "DART", "C", "C#", "JS");
//lenguajes.forEach((value) => {
//  document.write("<li>" + value + "</li>")
//});

//var peliculasString=lenguajes.join();


for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>")
}

console.log(lenguajes.reverse());


//Busquedas
var precios = [1, 10, 7, "11", 3]
//var find=lenguajes.find(lenguaje=> lenguaje == "PH3P");
var find = precios.some(value => typeof value == "string");
console.log(typeof find === "undefined" ? "Estoy indefinido" : find);