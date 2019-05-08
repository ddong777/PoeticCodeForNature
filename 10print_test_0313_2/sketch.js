let canvas;
let canvasX, canvasY;

let x, y;
x = 0;
y = 400;

let w = 3;
let p = 0.5;

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

  strokeWeight(0.8);
  stroke(255, 50);
  frameRate(1000);
}

function draw() {

  if (random() > p) {
    fill(255, random(100));
  	rect(x, y, w*8, -w*random(mouseX/5));
  } else {
    fill(0, random(100));
  	rect(x, y, w*20, -w*random(70));
  }

  x = x + w;

  if (x > width) {
    y = y - w;
    x = 0;
  }

  if (y < 0) {
    background(0);
    x = 0;
    y = height;
    w = random(0.5, 10);
    p = random(1);
    // console.log(w);
  }
}
