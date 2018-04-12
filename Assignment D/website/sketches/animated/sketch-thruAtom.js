 const s0 = function(p) {

	p.setup = function() {
	  let canvas = p.createCanvas(313, 313, p.WEBGL);
		canvas.parent('sketch-1');
	}

	 p.draw = function() {
	  p.background(55, 83, 91);

	  p.push();
	  p.translate(0,0);
	  p.atom(17, 55, 69, 61, 4);
	  p.pop();

	 }

	 p.atom = function(d, r, r2, r3, tr) {

	//sphere
	  p.push();
	  p.translate(p.random(-1,1), p.random(-4,1));
	  p.rotateX(1.7);
	  p.rotateY(p.frameCount * 0.2);
	  p.normalMaterial();
	  let sphereSize = d
	  p.sphere(d  * (p.mouseX * 0.005));
	  p.pop();

	// Ring
	  p.push();
	  let h = -10;
	  let w = 0;
	  let radius = r;
	  let tubeRadius = tr;
	  p.translate(w, h);
	  p.rotateX(0.1);
	  p.rotateY(p.frameCount * 0.03);
	  p.torus(r * (p.mouseX * 0.01), tr * (p.mouseY * 0.005));
	  p.pop();

	// Ring 2
	  p.push();
	  let h2 = -10;
	  let w2 = 0;
	  let radius2 = r2;
	  p.translate(w2, h2);
	  p.rotateX(p.PI/3.2);
	  p.rotateY(p.frameCount * 0.02);
	  p.torus(r2 * (p.mouseX * 0.01),tr * (p.mouseY * 0.005));
	  p.pop();

	// Ring 3
	  p.push();
	  let h3 = -10;
	  let w3 = 0;
	  let radius3 = r3;
	  p.translate(w3, h3);
	  p.rotateX(p.PI/3);
	  p.rotateY(p.frameCount * 0.05);
	  p.torus(r3 * (p.mouseX * 0.01),tr * (p.mouseY * 0.005));
	  p.pop();
	}

}
 const p0 = new p5(s0, 'sketch-1');
