function getEmSizeInPx(){
    var div = document.getElementById("em-box");
    div.style.height = '1em';
    return (div.offsetHeight);
}

const vidContainer = document.getElementById("video-container");
const textContainer = document.getElementById("text");
const contentDiv = document.getElementById("content");
const mainVideo = document.getElementById("main-video");
const styleSheet = document.getElementById("vidStyle");

function adjustContent() {
	var cols = 2;
	var oldCols = 0;

	var timer = 0;
	var id = setInterval(frame, 10);
	function frame() {
		timer++;
		if (window.innerWidth > window.innerHeight) {
			cols = 2;
		}
		else {
			cols = 1;
		}
		if (cols != oldCols) {
			//Update screen
			if (cols == 1) {
				adjustToOneCol();
			}
			else if (cols == 2) {
				adjustToTwoCols();
			}
			oldCols = cols;
		}
	}
}

function adjustToOneCol() {
	styleSheet.href = "../video-pages-1col-style.css";
}

function adjustToTwoCols() {
	styleSheet.href = "../video-pages-2col-style.css";
}
