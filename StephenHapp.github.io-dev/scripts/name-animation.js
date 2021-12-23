var mouseOnBox = false;
var colorShade = 0;
var colorBrightness = 100;

      function mouseOverBox() {
        mouseOnBox = true;
      }
      function mouseOffBox() {
        mouseOnBox = false;
      }
      function myMove() {
        var elem = document.getElementById("name-bg-div");
        var timer = 0;
        var id = setInterval(frame, 10);
        function frame() {
            timer++;
            if (mouseOnBox === true) {
                if (colorBrightness > 80) {
                    colorBrightness -= 0.5;
                }
            } else {
                if (colorBrightness < 100) {
                    colorBrightness += 0.5;
                }
            }
            elem.style.color = "hsl(" + colorShade + ", 100%, " + (colorBrightness) + "%)";
            colorShade += 1;
        }
      }
