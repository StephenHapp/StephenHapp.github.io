var mouseOnBox = false;
      var colorShade = 0;
      
      function mouseOverBox() {
        mouseOnBox = true;
      }
      function mouseOffBox() {
        mouseOnBox = false;
        document.getElementById("animate").style.color = "white";
      }
      function myMove() {
        var elem = document.getElementById("animate");   
        var timer = 0;
        var id = setInterval(frame, 5);
        function frame() {
          timer++; 
          elem.style.top = -1 - Math.sin(timer * Math.PI / 250)*2 + "vw"; 
          elem.style.left = 10 + Math.sin(timer * Math.PI / 500)*4 + "vw";
          if (mouseOnBox === true && timer % 20 === 0) {
            newColor();
          }
        }
      }
      function newColor() {
        var elem = document.getElementById("animate");
        colorShade = (colorShade + 80 + Math.floor((Math.random() * 200))) % 360;
        elem.style.color = "hsl(" + colorShade + ", 100%, 70%)";
    }
