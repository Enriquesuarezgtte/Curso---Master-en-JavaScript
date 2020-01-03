'use strict'

window.addEventListener('load', () => {
  //Timers
   function setIntervalo(){
    var tiempo = setInterval(() => {
      console.log('Set interval ejecutado');
      document.querySelector('h1').style.fontSize == "50px" ?
      document.querySelector('h1').style.fontSize="30px"
      : document.querySelector('h1').style.fontSize="50px";
    }, 1000);
    return tiempo;
  }
  
  var time = setIntervalo();
  var buttonStop = document.querySelector('#stop');
  var buttonStart = document.querySelector('#start');
  
  buttonStop.addEventListener('click',()=>{
    alert('Has parado el intervalo en bucle');
    console.log("inter", time);
    clearInterval(time);
    console.log("inter", time);
  });
  buttonStart.addEventListener('click',()=>{
     time =setIntervalo();
  });
});
