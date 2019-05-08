let canvas;
let x, y;

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목");
  title.position(20, 0);

  canvas = createCanvas(300, 300);
  canvas.class("artwork");
  centerCanvas();

  background(0);
}

function draw() {
  fill(0, 0, 255);
  ellipse(mouseX, mouseY, 50);
}
