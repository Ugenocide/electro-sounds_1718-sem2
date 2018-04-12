particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(60);
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {

  constructor() {
    this.x = 635;
    this.y = 600;
    this.vx = random(-6, 6);
    this.vy = random(-10, -1);
    //intensity
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
  }

  show() {
    noStroke();
    fill(color(random(255),random(55),random(55)), this.alpha);
    ellipse(this.x, this.y, 12);
  }

}
