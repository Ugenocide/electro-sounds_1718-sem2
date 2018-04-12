var numberOfRows;
var numberOfColumns;
var xSpace;
var ySpace;
var positions = [];

function setup(){
	createCanvas(windowWidth, windowHeight);
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
  for(var i = 0; i < positions.length; i++){ //go through all our positions
  rect(positions[i].x, positions[i].y, 37, 37); //put a circle at each of them
  }
}
