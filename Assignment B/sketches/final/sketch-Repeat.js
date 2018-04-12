let option = 1;

function setup() {
  createCanvas(960, 540);
  noFill();
}

function draw() {
  background(255);

  if (option == 1) {
    // Option 1: Stitches
    for (let x = 50; x <= width-50; x += 20) {
      for (let y = 50; y <= height-50; y+=20) {
        line(x-5, y-5, x+5, y+5);
        line(x+5, y-5, x-5, y+5);

      }
    }
  }
  else if (option == 2) {
    // Option 2: Perspective
    for (let x = 50; x <= width-50; x += 20) {
      for (let y = 50; y <= height-50; y+=20) {
        line(x * mouseX * 0.02, y * mouseY * 0.01, width/2, height/2);
      }
    }
  }
  else if (option == 3) {
    // Option 3: Overlapping circles
    for (let x = 50; x <= width-50; x += 20) {
      for (let y = 50; y <= height-50; y+=20) {
        let s = sin(frameCount * 0.05) * 20;
        ellipse(x, y, 40 + s, 40 + s);
      }
    }
  }
  else if (option == 4) {
    // Option 4: Rotating arcs
    let count = 120;
    for (let x = 50; x <= width-50; x += 20) {
      for (let y = 50; y <= height-50; y+=20) {
        let s = map(count, mouseX, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s + PI);
        count--;
      }
    }
  }
  else if (option == 5) {
    // Option 5: Groups of five
    for (let x = 50; x < width-50; x += 20) {
      for (let y = 50; y < height-50; y+=20) {
        //rect(x-10, y-10, 22, 22);
        for (let i = 0; i < 16; i+=4) {
          line(x + i, y, x + i, y + 12);
        }
        line(x, y, x + 12, y + 12);
      }
    }
  }
}

function mousePressed() {
  option++;
  if (option > 5) option = 1;
}
