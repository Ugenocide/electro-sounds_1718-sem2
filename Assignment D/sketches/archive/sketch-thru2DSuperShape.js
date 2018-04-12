// 2D SuperShape //

let n1 = 1;
let n2 = 1;
let n3 = 1;
let m = 1.7;
let a = 1;
let b = 1;

function setup() {
  createCanvas(960, 540);
}

function supershape(theta) {
  let r = 1;
  let part1 = (1 / a) * cos(theta * m / 4 * mouseY/500);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  let part2 = (1 / b) * sin(theta * m / 4 * mouseX/10000);
  part1 = abs(part1);
  part1 = pow(part1, n3);

  let part3 = pow(part1 + part2, 1 / n1);

  if(part3 === 0) {
    return 0;
  }
  return (1 / part3);
}

function draw() {
  background(55, 83, 91);
  translate(width/2, height/2);

  let radius = 100;
  let total = 500;
  let increment = HALF_PI / total;
  stroke(200);

  beginShape();
  for(let angle = 0; angle < PI * 20; angle+= increment) {
  let r = supershape(angle);
  let x = radius * r * cos(angle);
  let y = radius * r * sin(angle);
    vertex(x, y);
    noFill();
  }
  endShape(CLOSE);

}

//function keyPressed() {
//  if (m === 1) {
//  m = 1.7;
//}  else {
//   m = 1;
// }
//}
