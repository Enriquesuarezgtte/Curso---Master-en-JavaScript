'use strict'

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tu apellido");


var texto = `
<h1> Hola que tal </h1>
<h3> Mi nombre es :${nombre}</h3>
<h3> Mis apellidos son :${apellidos}</h3>
`;

document.write(texto);