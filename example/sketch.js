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

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";

  text = createDiv(description);
  text.position(x + width, y);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  background(0);
}

function draw() {
  fill(255);
  ellipse(mouseX, mouseY, 50);
}
