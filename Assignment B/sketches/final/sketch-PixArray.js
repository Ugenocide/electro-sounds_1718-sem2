let video;
let vScale = 8;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);

}

function draw() {
  background(255);
  video.loadPixels();
  loadPixels();

  for(let y = 0; y < video.height; y++ ){
    for(let x = 0; x < video.width; x++){
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let bright = (r+g+b)/3;
      let threshold = mouseX * 0.1;

      if (bright > threshold){
        fill(color(255));
      } else {
        fill(color(random(0,195),random(0,125),random(0,225)));
      }

      noStroke();
      rectMode(CENTER);
      ellipse(x * vScale, y * vScale, vScale, vScale);
    }
  }
 }
