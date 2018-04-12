
let brickWidth = 40;
let brickHeight = 15;
let cols = 22;
let rows = 24;
let columnOffset = 60;
let rowOffset = 30;
let rotationIncrement = 1.6;


function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255);
  smooth();
  noFill();
  stroke(0);
  noLoop();
}

function draw() {
  translate(30, 30);
  for (let i=0; i<cols; i++) {
    push();
    translate(i * columnOffset, 0);
    let r = random(-QUARTER_PI, QUARTER_PI);
    let dir = 1;
    for (let j=0; j<rows; j++) {
      push();
      translate(0, rowOffset * j);
      rotate(r);
      rect(-brickWidth/2, -brickHeight/2, brickWidth, brickHeight);
      pop();
      r += dir * rotationIncrement;
      if (r > QUARTER_PI || r < -QUARTER_PI) dir *= -1;
    }
    pop();
  }
}
