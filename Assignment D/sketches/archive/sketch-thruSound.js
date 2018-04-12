// Sound with Buttons and FFT/Amplitude analysis
let song;
let slider;
let button;
let stopButton;
let fft;
let amp;
let w;

function preload() {
  song = loadSound("Thru.mp3");
}

function setup() {
	createCanvas(960,540);
	slider = createSlider(0, 1, 0.5, 0.01);
	button = createButton("play");
	stopButton = createButton("rewind");
	button.mousePressed(togglePlaying);
	stopButton.mousePressed(toggleStop);
	fft = new p5.FFT(0, 64);
	w = width / 64;
}

function togglePlaying() {
	if(!song.isPlaying()) {
		song.play();
		button.html("pause");
  } else {
		song.pause();
		button.html("play");
	}
}

function toggleStop() {
	if(!song.isPlaying()) {
		song.stop();
	}
}

function draw() {
	background(180);
	song.setVolume(slider.value());
	let spectrum = fft.analyze();
	for(let i = 0; i < spectrum.length; i++) {
		let amp = spectrum[i];
		let y = map(amp, 0, 256, height, 0);
		rect(i * w, height/2, w, -spectrum[i]);
	}
	//console.log(spectrum.length);
}
