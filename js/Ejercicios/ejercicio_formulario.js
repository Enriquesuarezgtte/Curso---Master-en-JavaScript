'use strict'

window.addEventListener('load', () => {
  console.log('DOM cargado');
  var submit = document.querySelector('#formulario');

  submit.addEventListener('submit', () => {
    var nombre = document.querySelector('#name').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;
    console.log(nombre, apellidos, edad);

    var parrafo = document.createElement("p");
    parrafo.append(nombre);
    parrafo.append(apellidos);
    parrafo.append(edad);

    document.querySelector('#datos').append(parrafo);
  });
});
