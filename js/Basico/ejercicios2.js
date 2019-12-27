'use strict'


var numero1 = Number(prompt('Ingrese numero1'));

document.write("<h1> De " + numero1 + " a " + numero2 + "</h1>");
for (var i = numero1 + 1; i < numero2; i++) {
    if (i % 2 != 0) {
        document.write(i + "<br/>");
        console.log('numero i' + i);
    }
}
