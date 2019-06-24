let canvas;
let x, y;

let cells = [];
let cellNum;

let head;

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  title = createElement('h2', "</a> multicellular");
  title.position(windowWidth/2 - 80, 0);

  canvas = createCanvas(windowWidth*0.8, windowWidth*0.8);
  canvas.class("artwork");
  centerCanvas();

  background(0);
  rectMode(CENTER);

  head = new headCell(width/2, height/2);

  cellNum = random(5);
  for (let i = 0; i < cellNum; i++){
    cells[i] = new cell(random(width), random(height));
  }
}

function draw() {
  head.update();
  head.applyBehaviors(createVector(mouseX, mouseY));

  for(let i = 0; i < cells.length; i++){
    cells[i].applyBehaviors(cells, head.pos);
    cells[i].update();
    cells[i].display();
  }

  if (random() < 0.01 && cells.length < 7){
    cells.push(new cell(random(width), random(height)));
  }

  head.display();
  // print(head.pos.x);
}
