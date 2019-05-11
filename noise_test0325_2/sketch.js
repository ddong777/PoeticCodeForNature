let canvas;
let canvasX, canvasY;

let aoff, boff;

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 10 print practice");
  title.position(20, 0);

  canvas = createCanvas(400, 400);
  canvas.class("artwork");
  centerCanvas();

  background(0);

  aoff = random(0, 10);
	boff = random(0, 10);
}

function draw() {
	for (let i = -10; i < 10; i++) {
		ellipse(i*50 + noiseA(0.0001, width), noiseB(0.0001, height), i*10, i*10);
    ellipse(noiseB(0.0005, width), i*50 + noiseA(0.0005, height), i*10, i*10);
	}
}

function noiseA(gap, max) {
	let noiseA = noise(aoff) * max;
	aoff += gap;

	return noiseA;
}

function noiseB(gap, max) {
	let noiseB = noise(boff) * max;
	boff += gap;

	return noiseB;
}

function mousePressed(){
  save();
}
