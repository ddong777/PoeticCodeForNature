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
  canvas = createCanvas(windowHeight*0.8, windowHeight*0.8);
  canvas.class("artwork");
  centerCanvas();

  background(0);
  rectMode(CENTER);

  head = new headCell(width/2, height/2);

  cellNum = random(100);
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

  if (random() < 0.01 && cells.length < 150){
    cells.push(new cell(random(width), random(height)));
  }

  head.display();
  // print(head.pos.x);
  push();
  fill(255);
  title = createElement('h2', "</a> 2.multicellular");
  title.position(windowWidth/2 - 80, 0);
  pop();
}

function mousePressed(){
  save("flower.png")
}
