var elem = document.getElementById("mouse-cursor");

onResize();
window.addEventListener("resize", onResize);

// use this function to define dynamic css properties
function onResize() {
  document.getElementById("container").style.width = window.innerWidth + "px";
  document.getElementById("container").style.height = window.innerHeight + "px";
  document.getElementById("top-detect").style.width = window.innerWidth + "px";
  document.getElementById("top-detect").style.height = window.innerHeight + "px";
  elem.style.width = window.innerHeight * 0.1 + "px";
  elem.style.height = window.innerWidth * 0.1 + "px";
  document.getElementById("text").style.left = window.innerWidth / 2 - document.getElementById("text").offsetWidth / 2 + "px";
  document.getElementById("text").style.top = window.innerHeight / 2 - document.getElementById("text").offsetHeight / 2 + "px";
}


function showCoords(event) {
  
  // Set these yourself
  var cW = window.innerWidth; // container width in px
  var cH = window.innerHeight; // container height in px
  var eW = elem.offsetWidth; // elem width in px
  var eH = elem.offsetHeight; // elem height in px
  
  var x = event.pageX;
  var y = event.pageY;
  
  // X-position code
  if (x <= eW / 2) {
    elem.style.left = "0px";
  } else if (x >= (cW - (eW / 2))) {
    elem.style.left = cW - eW + "px";
  } else {
    elem.style.left = x - (eW / 2) + "px";
  }
  
  // Y-position code; same concept as X-position code
  if (y <= eH / 2) {
    elem.style.top = "0px";
  } else if (y >= (cH - (eH / 2))) {
    elem.style.top = cH - eH + "px";
  } else {
    elem.style.top = y - (eH / 2) + "px";
  }
  
}

var colorShade = 0;
function colorchange() {
  colorShade = (colorShade + 80 + Math.floor((Math.random() * 200))) % 360;
  document.getElementById("heading").style.color = "hsl(" + colorShade + ", 100%, 70%)";
}
