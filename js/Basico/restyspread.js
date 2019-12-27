'use strict'

//Parámetros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...todasLasFrutas) {
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log("resto de frutas", todasLasFrutas)

}
var frutas = ["Naranja", "Mango"]
listadoFrutas(...frutas, "Sandia", "Pera", "Melon");