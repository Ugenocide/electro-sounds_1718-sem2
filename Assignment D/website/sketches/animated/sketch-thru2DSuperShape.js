// 2D SuperShape //

const s1 = function(p) {

let n1 = 1;
let n2 = 1;
let n3 = 1;
let m = 1.7;
let a = 1;
let b = 1;

 p.setup = function() {
  let canvas = p.createCanvas(640, 313);
}

  p.supershape = function(theta) {
  let r = 1;
  let part1 = (1 / a) * p.cos(theta * m / 4 * p.mouseY/500);
  part1 = p.abs(part1);
  part1 = p.pow(part1, n2);

  let part2 = (1 / b) * p.sin(theta * m / 4 * p.mouseX/10000);
  part1 = p.abs(part1);
  part1 = p.pow(part1, n3);

  let part3 = p.pow(part1 + part2, 1 / n1);

  if(part3 === 0) {
    return 0;
  }
  return (1 / part3);
}

  p.draw = function() {
  p.background(55, 83, 91);
  p.translate(p.width/2, p.height/2);

  let radius = 100;
  let total = 500;
  let increment = p.HALF_PI / total;
  p.stroke(200);

  p.beginShape();
  for(let angle = 0; angle < p.PI * 20; angle+= increment) {
  let r = p.supershape(angle);
  let x = radius * r * p.cos(angle);
  let y = radius * r * p.sin(angle);
    p.vertex(x, y);
    p.noFill();
  }
  p.endShape(p.CLOSE);

 }

}
 const p1 = new p5(s1, 'sketch-thru2DSuperShape');

//function keyPressed() {
//  if (m === 1) {
//  m = 1.7;
//}  else {
//   m = 1;
// }
//}
