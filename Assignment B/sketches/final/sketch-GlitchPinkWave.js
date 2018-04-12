let img;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img = createImage(1100,250);
}

function draw() {
  img.loadPixels();

  for(let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++) {

    let n = (x * img.height + y/8) * (mouseX/400);
    let m = (y * img.width + x/8) * (mouseY/400);
    let c1 = sin((frameCount + n + m) * 0.0001) * 331;
      img.set(x + (c1 / 2), y, color(210,c1,193));
    }
  }
  img.updatePixels();
  image(img, 0, 0, width, height);
}
