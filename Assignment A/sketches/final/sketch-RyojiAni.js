var blackGrey;
var numofbox = 1000; // make it a global state
var xposition = [-145,15,175,335,495,655,815,975];
let angle = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  blackGrey = [];
  for(var i=0; i<25; i++){
    blackGrey[i] = color(0);
  }
}

function draw(){
  background(255);
  noStroke();
  for (var i = 0; i < numofbox; i++){
  push();
  translate(xposition[i % 8], 0);
  fill(blackGrey[i % blackGrey.length]);
  let s = sin(frameCount * random()) * 50;
  rect(150 + s, random(width), 154.5 + s, random(height/22));
  pop();
  }
}
