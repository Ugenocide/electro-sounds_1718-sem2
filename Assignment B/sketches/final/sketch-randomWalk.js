//var x;
//var y;
var pos;
var prev;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display','block');
  background(255);
  //x = 650;
  //y = 300;
  pos = createVector(550,300);
  prev = pos.copy();

}

function draw() {

  stroke(color(random(125,255), random(255), random(125,255)));
  strokeWeight(2.5);
  //point(pos.x,pos.y);
  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos);
  var step = p5.Vector.random2D();

  let r = random(100);
  if (r < 2){
      step.mult(float(random(25,100)));
  } else {
    step.setMag(2);
  }
//  let r = floor(random(4));

//  switch(r) {
//    case 0:
//      pos.x = pos.x + 1;
//      break;
//    case 1:
//      pos.x = pos.x - 1;
//      break;
//    case 2:
//      pos.y = pos.y + 1;
//      break;
//    case 3:
//      pos.y = pos.y - 1;
//      break;
//  }

  pos.add(step);

}
