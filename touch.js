//a
function inicio() {
  if (window.DeviceOrientationEvent) {
     window.addEventListener("deviceorientation", moverDiv);
   } 
}

window.onload = inicio;

function moverDiv(e){
   document.getElementById("myDIV").style.transform = "rotate("+e.alpha+"deg)";
}

//b

/*function inicio() {
   if (window.DeviceOrientationEvent) {
     window.addEventListener("deviceorientation", tresD);
   }
}

 window.onload = inicio;
 
function tresD(e){
   "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
   "rotateX(" + e.beta + "deg) " +
   "rotateY(" + ( -e.gamma ) + "deg)";
}*/