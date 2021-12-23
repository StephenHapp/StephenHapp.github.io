function adjustColumns() {
	var boxes = document.getElementsByClassName("project-box");
	var contentArea = document.getElementById('content-area');
	var windowHeight = 0;
	var windowWidth = 0;
	var numCols = 4;
	var oldNumCols = 4;
	var em;
	var boxSize;

	var timer = 0;
	var id = setInterval(frame, 10);
	function frame() {
		timer++;
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
		em = getEmSizeInPx();
		if (windowWidth > em * 100) {
			numCols = 4;
			boxSize = "20vw";
		}
		else if (windowWidth > em * 62) {
			numCols = 3;
			boxSize = "26vw";
		}
		else {
			numCols = 2;
			boxSize = "39vw";
		}

		if (numCols != oldNumCols) {
			//Update the page
			for (let i = 0; i < boxes.length; ++i) {
				boxes[i].style.width = boxSize;
				boxes[i].style.height = boxSize;
			}
			if (numCols == 2) {
				contentArea.style.gridTemplateColumns = "auto auto";
			} else if (numCols == 3) {
				contentArea.style.gridTemplateColumns = "auto auto auto";
			} else if (numCols == 4) {
				contentArea.style.gridTemplateColumns = "auto auto auto auto";
			}
			oldNumCols = numCols;
		}
	}
}

function animateElement(elem) {
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

function getEmSizeInPx(){
    var div = document.getElementById("em-box");
    div.style.height = '1em';
    return (div.offsetHeight);
}
