size(600, 400);
frameRate(60);
background(255, 255, 255);
fill(0, 0, 0);
noCursor();
// Define the array
var drawingData = [];
// Define variables for 'draw' loop
var dataNum = 0;
var thePenSize = 16;
draw = function() {
 // Take in input
 if (mousePressed === true) {
   drawingData.push(mouseX);
   drawingData.push(mouseY);
 } else {
   if (drawingData[drawingData.length - 1] !== -1 && drawingData.length > 0) {
     drawingData.push(-1);
   }              }
  // Display the recording
 background(255, 255, 255);
 strokeWeight(thePenSize);
 stroke(0, 0, 0);
 dataNum = 0;
 while (dataNum+2 < drawingData.length) {
   if (drawingData[dataNum+2] !== -1) {
     line(drawingData[dataNum],drawingData[dataNum+1],drawingData[dataNum+2],drawingData[dataNum+3]);
     dataNum += 2;
   } else {
     dataNum += 3;
  }
 }
 // Display the cursor
 strokeWeight(2);
 stroke(255, 0, 0);
 line(mouseX-10, mouseY, mouseX+10, mouseY);
 line(mouseX, mouseY-10, mouseX, mouseY+10);
 //text(drawingData,0,400)
}
