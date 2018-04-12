function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0);
  stroke(255);
  noFill();
  let s = sin(frameCount * 0.05) * 50
  drawCircle(650, 325, 300 + s);
}

function drawCircle(x, y, d){
  ellipse(x, y, d);
  if (d > 10) {
  drawCircle(x + d, y, d * random(0.4,0.5));
  drawCircle(x - d, y, d * random(0.4,0.5));
  drawCircle(x, y + d * random(0.4,0.5), d * random(0.4,0.5));
  drawCircle(x, y - d * random(0.4,0.5), d * random(0.4,0.5));
  }
}
