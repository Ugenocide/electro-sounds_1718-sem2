// Tunnel Simulation

function setup() {
  createCanvas(960, 540);
}

function draw() {
  rectMode(CENTER);
  background(255);

  stroke(15);
  line(width / 2, 4 * height / 10, width / 2, 6 * height / 10);

  for (let x = 0; x <= width; x += width / 200) {
    line(x, 0, width / 2, 4 * height / 10);
    line(x, height, width / 2, 6 * height / 10);
  }
}
