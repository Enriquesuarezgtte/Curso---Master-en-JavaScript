'use strict'

//Funciones anónimas

var pelicula = function (nombre) {
    return "La pelicula es " + nombre;
}
console.log(pelicula("hero"));


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}
var sumaYmuestr = function (dato) {
    console.log(dato);
}
var sumax2 = function (dato) {
    console.log("La suma por dos es: ", (dato * 2));
};
sumame(5, 7, sumaYmuestr, sumaYmuestr);