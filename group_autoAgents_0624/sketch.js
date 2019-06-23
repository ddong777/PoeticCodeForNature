let canvas;
let x, y;

let cells = [];
let cellNum;

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

  // background(0);
  cellNum = random(10, 30);
  for (let i = 0; i < cellNum; i++){
    cells[i] = new cell(random(width), random(height));
  }
}

function draw() {
  for(let i = 0; i < cells.length; i++){
    for (let j = 0; j < cells.length-1; j++){
      cells[i].seek(createVector(cells[j].pos.x, cells[j].pos.y));
      cells[i].update();
      cells[i].display();
    }
  }
}

function mousePressed(){
  cells.push(new cell(mouseX, mouseY));
}
