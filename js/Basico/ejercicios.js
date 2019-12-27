'use strict'
/*
Cual es mayor, menor, o igual
*/
do {
    var numero1 = Number(prompt('Ingrese numero1'));
    var numero2 = Number(prompt('Ingrese numero2'));
} while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2));


if (numero1 < numero2) {
    console.log("El número 2 es mayor al número 1");

} else if (numero1 > numero2) {
    console.log("El número 1 es mayor al número 2");
} else {
    console.log("Los números son iguales")
}