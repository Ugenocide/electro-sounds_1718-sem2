// 3D supershape sketch \\
let a = 0;
let b = 0;
let audio;
let slider;
let button;
let stopButton;
let fft;
let amp;
let value1;
let value2;
let value3;
let value4;

// Create Canvas, introduce WEBGL to make the sketch 3D \\
function preload() {
  audio = loadSound("assets/audio/Implode.mp3");
}

function setup() {
  createCanvas(displayWidth, displayHeight * 0.69, WEBGL);
  slider = createSlider(0, 1, 0.5, 0.01);
  button = createButton("play");
  stopButton = createButton("rewind");
  button.mousePressed(togglePlaying);
  stopButton.mousePressed(toggleStop);
  fft = new p5.FFT(0, 256);
  let fov = 60 / 180 * PI;
  let cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 1000);
}

function togglePlaying() {
	if(!audio.isPlaying()) {
		audio.play();
		button.html("pause");
  } else {
		audio.pause();
		button.html("play");
	}
}

function toggleStop() {
	if(!audio.isPlaying()) {
		audio.stop();
	}
}

function draw() {

// setup CAMERA \\

  if (keyIsDown(LEFT_ARROW)) {
    a -= 1000;
  } else if (keyIsDown(RIGHT_ARROW)) {
    a += 1000;
  } else if (keyIsDown(UP_ARROW)) {
    b -= 500;
  } else if (keyIsDown(DOWN_ARROW)) {
    b += 500;
  }
  a = constrain(a,-1000,5000); //constrain creates a maximum where the camera perspective can go
  b = constrain(b,-1500,3000);

  let camX = map(a, 0, width, 0, 100);
  let camY = map(b, 0, width, 0, 100);
  camera(camX, camY, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);

// background colour \\

  background(value1,value3,value4);

// setup Audio \\

   audio.setVolume(slider.value());
 let spectrum = fft.analyze();
 let changes = [];
 for(let h = 0; h < spectrum.length; h++) {
   let amp = spectrum[h];
   let v = map(amp, 0, 256, height, 0);
   changes[h] = v;
 }
//set parameters for 3D SuperSphere \\

  let total = sin(frameCount * 0.02) * 10 + 10;
  let radius = 300;
  let depth = -1500;
  noStroke();

  push();
  translate(0, 0, depth);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.02);

beginShape(TRIANGLES);
  for(let i = 0; i < total; i++) {
    let lon = map(i, 0, total, -PI, PI);
    for(let j = 0; j < total; j++) {
      let lat = map(j, 0, total, -PI, PI);
      let x = radius * sin(lat) * cos(lon);
      let y = radius * sin(lon) * sin(lat);
      let z = radius * cos(lat) * tan(value2);
      let c = sin((i + frameCount) * 0.025) * changes[i] + 128 - changes[j];
      fill(random(63,117), random(133,213), 140 - c);
      vertex(x - changes[i], y + changes[j], z + c); // creating points in WEBGL
    }
  }
endShape(CLOSE);
  pop();
}

function keyTyped() {
  if (key === '1') {
    value1 = 117;
    value2 = 21;
    value3 = 39;
    value4 = 96;
  } else if (key === '2') {
    value1 = 29;
    value2 = 0;
    value3 = 89;
    value4 = 69;

  } else if (key === '3') {
    value1 = 53;
    value2 = 106;
    value3 = 4;
    value4 = 166;
  }

}
