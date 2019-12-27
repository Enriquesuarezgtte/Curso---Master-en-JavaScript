'use strict'
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}
var sumaYmuestr = dato => {
    console.log(dato);
}
var sumax2 = dato => {
    console.log("La suma por dos es: ", (dato * 2));
};
sumame(5, 7, sumaYmuestr, sumax2);