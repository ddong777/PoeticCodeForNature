let canvas;
let x, y;
let grs = [];

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> grass(임시제목)");
  title.position(windowWidth/2, 0);

  canvas = createCanvas(1000, 800);
  canvas.class("artwork");
  centerCanvas();

  background(220);
  for (let i = 0; i < 10; i++) {
    grs[i] = new grass(width/2, height/2);
  }
}

function draw() {
  for (let i = 0; i < grs.length; i++) {
    grs[i].update();
    grs[i].display();

    if (grs[i].die){
      grs.splice(i, 1);
    }
  }
}

function mousePressed() {
  grs.push(new grass(mouseX, mouseY));
}
