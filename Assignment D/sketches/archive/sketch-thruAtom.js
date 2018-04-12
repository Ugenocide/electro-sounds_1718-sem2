
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(225);

  push();
  translate(0,0);
  atom(17, 55, 69, 61, 4);
  pop();

 }

function atom(d, r, r2, r3, tr) {

//sphere
  push();
  translate(random(-1,1), random(-4,1));
  rotateX(1.7);
  rotateY(frameCount * 0.2);
  normalMaterial();
  let sphereSize = d
  sphere(d  * (mouseX * 0.005));
  pop();

// Ring
  push();
  let h = -10;
  let w = 0;
  let radius = r;
  let tubeRadius = tr;
  translate(w, h);
  rotateX(0.1);
  rotateY(frameCount * 0.03);
  torus(r * (mouseX * 0.01), tr * (mouseY * 0.005));
  pop();

// Ring 2
  push();
  let h2 = -10;
  let w2 = 0;
  let radius2 = r2;
  translate(w2, h2);
  rotateX(PI/3.2);
  rotateY(frameCount * 0.02);
  torus(r2 * (mouseX * 0.01),tr * (mouseY * 0.005));
  pop();

// Ring 3
  push();
  let h3 = -10;
  let w3 = 0;
  let radius3 = r3;
  translate(w3, h3);
  rotateX(PI/3);
  rotateY(frameCount * 0.05);
  torus(r3 * (mouseX * 0.01),tr * (mouseY * 0.005));
  pop();
}
