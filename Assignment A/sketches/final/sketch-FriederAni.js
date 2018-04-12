var numberOfRows;
var numberOfColumns;
var xSpace;
var ySpace;
var positions = [];
let angle = 0

function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
  numberOfColumns = 34;
  numberOfRows = 20;
  xSpace = width/numberOfColumns;
  ySpace = height/numberOfRows;
  for(var x = 0; x < width; x += xSpace){
  for(var y = 0; y < height; y += ySpace){
  var p = createVector(x, y);
  positions.push(p);
    }
  }
}

function draw(){
background(255);
  for(var i = 0; i < positions.length; i++){
  rect(positions[i].x, positions[i].y, 37, 37);
	rotate(angle);
	angle = 0 + random(-0.025, 0.025);
  }
}
