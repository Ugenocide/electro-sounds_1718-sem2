let tree;
let max_dist = 75;
let min_dist = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tree = new Tree();
}

function draw() {
  background(0);
  tree.show();
  tree.grow();
}

function Branch(parent, pos, dir) {
  this.pos = pos;
  this.parent = parent;
  this.dir = dir;
  this.origDir = this.dir.copy();
  this.count = 0;
  this.len = 15;

  this.reset = function() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }


  this.next = function() {
    let nextDir = p5.Vector.mult(this.dir, this.len);
    let nextPos = p5.Vector.add(this.pos, nextDir);
    let nextBranch = new Branch(this, nextPos, this.dir.copy());
    return nextBranch;
  }

  this.show = function() {
    if (parent != null) {
      stroke(255);
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
    }

  }
}

function Tree() {
  this.leaves = [];
  this.branches = [];

  for (let i = 0; i < 900; i++) {
    this.leaves.push(new Leaf());
  }
  let pos = createVector(width / 2, height);
  let dir = createVector(0, -1);
  let root = new Branch(null, pos, dir);
  this.branches.push(root);
  let current = root;
  let found = false;
  while (!found) {
    for (let i = 0; i < this.leaves.length; i++) {
      let d = p5.Vector.dist(current.pos, this.leaves[i].pos);
      if (d < max_dist) {
        found = true;
      }
    }
    if (!found) {
      let branch = current.next();
      current = branch;
      this.branches.push(current);
    }
  }

  this.grow = function() {
    for (let i = 0; i < this.leaves.length; i++) {
      let leaf = this.leaves[i];
      let closestBranch = null;
      let record = max_dist;
      for (let j = 0; j < this.branches.length; j++) {
        let branch = this.branches[j];
        let d = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;
        } else if (d < record) {
          closestBranch = branch;
          record = d;
        }
      }

      if (closestBranch != null) {
        let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for (let i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 5);
      }
    }

    for (let i = this.branches.length - 1; i >= 0; i--) {
      let branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1);
        this.branches.push(branch.next());
        branch.reset();
      }
    }
  }





  this.show = function() {
    for (let i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }

    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }

  }

}

function Leaf() {
  this.pos = createVector(random(width), random(height - 150));
  this.reached = false;

  this.show = function() {
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 1, 1);
  }

}
