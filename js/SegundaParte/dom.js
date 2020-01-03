'use strict'

//DOM- Document Object Model

//var doc= document.getElementById("caja");

//var doc = document.querySelector("#caja");
//doc.innerHTML = "Texto desde JS";
//doc.style.padding ="15px";

///Conseguir elementos por su etiqueta

///Conseguir elementos por su clase


var todosLosDivs = document.getElementsByTagName("div");
todosLosDivs[1].innerHTML = "Ahora cambiamos el texto para el segundo elemento";
console.log(todosLosDivs[1].innerHTML);
var element;
//for(element in todosLosDivs){
   // var parrafo = document.createElement("p");
    //var texto = document.createTextNode(todosLosDivs[element].textContent);
    //parrafo.append(texto);
    //document.querySelector("#miseccion").appendChild(parrafo);
//}

///get by class

var divRojo= document.getElementsByClassName("rojo");
for(element of divRojo){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(element.textContent);
    parrafo.append(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}
//console.log(divRojo);

//Query selector

var id = document.querySelectorAll(".rojo");
console.log(id);