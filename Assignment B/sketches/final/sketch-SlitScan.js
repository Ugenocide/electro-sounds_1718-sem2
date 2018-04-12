//slit scan

var video;

var x = 0;

function setup() {
  createCanvas(1000, 260);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 260);
  background(60);
}

function draw() {
  video.loadPixels();

  var w = video.width;
  var h = video.height;

  copy(video, w/4, 0, 1, h, x, 0, 1, h);

  x = x + 1;
  if (x > width){
    x = 0;
  }
}
