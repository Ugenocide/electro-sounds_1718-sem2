let axiom = "F";
let sentence = axiom;
let len = 150;
let angle;

let rules = [];

rules[0] = {
  a: "F",
  b: "FF+[+F+F-F]-[-F+F+F]"
}

function generate() {
  len *= 0.5;
  let nextSentence = "";
  for(let i = 0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    let found = false;
    for(let j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found){
    nextSentence += current;
   }
  }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

function turtle(){
  background(68);
  translate(width/2, height);
  stroke(255,100);
  for (let i = 0; i < sentence.length; i++){
    let current = sentence.charAt(i);

    if (current == "F"){
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+"){
      rotate(angle);
    } else if (current == "-"){
      rotate(-angle);
  } else if (current == "["){
    push();
} else if (current == "]"){
  pop();
  }
 }
}

function setup() {
  createCanvas(1280, 600);
  angle = radians(20);
  background(68);
  createP(axiom);
  turtle();
  let button = createButton("generate");
  button.mousePressed(generate);
}
