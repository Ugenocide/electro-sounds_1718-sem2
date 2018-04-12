let img;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img = createImage(1000,100);
}

function draw() {
  img.loadPixels();

  for(let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++) {

    let n = (x * img.height * img.width + y) * mouseX;
    let c1 = sin((frameCount + n) * 0.01) * 2221;
      img.set(x,y,color(c1,random(80,165),c1));
    }
  }
  img.updatePixels();
  image(img, 0, 0, width, height);
}
