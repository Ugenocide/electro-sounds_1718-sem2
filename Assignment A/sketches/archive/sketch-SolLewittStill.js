var colors;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	colors = [];
	for(var i=0;i<40;i++){
		colors[i] = color(random(255), random(255), random(255));
	}
}

function draw() {
	background(255);
	noStroke();
//circle
	push();
	translate(200, height);

	var diameterUnit = 50;
	var numOfCircles = 40;

	for(var i=0;i<numOfCircles; i++) {
		var d = (numOfCircles - i) * diameterUnit;
		fill(colors[i % colors.length]);
		ellipse(0,0, d, d);
	}
	pop();
//rectangle Vertical
	push();
	translate(200,-200);
	for(var i=0; i < colors.length; i++) {
		fill(colors[i]);
		rect(i*25,0,25,height);
	}
	pop();
//rectangle Horizontal
push();
rotate(90);
translate(0,-200);
for(var i=0; i < colors.length; i++) {
	fill(colors[i]);
	rect(i*25,0,25,height);
}
pop();

	// Borders
	stroke(0);
	strokeWeight(10);
	line(width / 3, 0, width / 3, height);
	line(width / 3, height / 1.5, width, height / 1.5);
	noFill();
	rect(5, 5, width - 10, height - 10);

}
