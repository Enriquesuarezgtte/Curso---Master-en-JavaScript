'use strict'

///Eventos del mouse
var boton = document.querySelector("#boton");
var input = document.querySelector('#campo_nombre');

function cambiarColorBoton() {
    boton.style.background = "red";
}
function cambiarAOtroColor() {
    boton.style.background = "green";
}
//click
boton.addEventListener('click', () => cambiarColorBoton());

//mouse over
boton.addEventListener('mouseover', () => cambiarColorBoton());

//mouse out
boton.addEventListener('mouseout', () => cambiarAOtroColor());

//focus
input.addEventListener('focus',()=>{
    console.log('focus');    
});

//blur
input.addEventListener('blur',()=>{
    console.log('blur');    
});

//keydown
input.addEventListener('keydown',(event)=>{
    console.log('keydown', String.fromCharCode(event.keyCode));    
});

//keypress
input.addEventListener('keypress',()=>{
    console.log('keypress');    
});

//keyup
input.addEventListener('keyup',()=>{
    console.log('keyup');    
});

