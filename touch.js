  
function inicio() {
    /*var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
 //   el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);*/

    /*if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation',orientacion);
    }
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation',orientacion2);
    }
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation',orientacion3);
    }*/

   /*if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", moverDiv);
    }*/
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", tresD);
    }
  }

  window.onload = inicio;
  
  /*function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchstart " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }
  function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchend " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }
  function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchmove " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }

  function click()
  {
      alert("click");
  }

  function orientacion(e)
  {
    document.getElementById("log").innerHTML = e.alpha;
  }
  function orientacion2(e)
  {
    document.getElementById("log").innerHTML = e.gamma;
  }
  function orientacion3(e)
  {
    document.getElementById("log").innerHTML = e.beta;
  }*/
  /*function moverDiv(e){
    document.getElementById("myDIV").style.transform = "rotate("+e.alpha+"deg)";
  }*/
  function tresD(e){
    "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
    "rotateX(" + e.beta + "deg) " +
    "rotateY(" + ( -e.gamma ) + "deg)";
  }