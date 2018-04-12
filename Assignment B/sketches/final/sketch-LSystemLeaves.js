let tree = [];
let leaves = [];
let branch;

let count = 0;

function setup() {
  createCanvas(900, windowHeight);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 200);
  let root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 12) {
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
  background(151);

  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
    //tree[i].jitter();
  }

  for (let i = 0; i < leaves.length; i++) {
    fill(155, 0, 80, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 5, 3);
    leaves[i].x += random(0, 2);
    leaves[i].y += random(0, 2);
  }

}

function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.jitter = function() {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branchA = function() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6);
    dir.mult(0.75);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }
  this.branchB = function() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }



}
