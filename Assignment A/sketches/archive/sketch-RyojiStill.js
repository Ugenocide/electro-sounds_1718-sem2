var blackGrey;
var numofbox = 1000; // make it a global state
var xposition = [-145,15,175,335,495,655,815,975];


function setup(){
  createCanvas(windowWidth,windowHeight);
  blackGrey = [];
  for(var i=0; i<2; i++){
    blackGrey[i] = color(0);
  }
}

function draw(){
  background(255);
  noStroke();
  noLoop();
  for (var i = 0; i < numofbox; i++){
  push();
  translate(xposition[i % 8], 0);
  fill(blackGrey[i % blackGrey.length]);
  rect(150, random(width), 154.5, random(height/22));
  pop();
  }
}
