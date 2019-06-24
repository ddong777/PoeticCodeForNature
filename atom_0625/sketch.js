let canvas;
let x, y;

let atom;
let electrons = [];
let electronNum;

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(windowWidth*0.8, windowWidth*0.8);
  canvas.class("artwork");
  centerCanvas();

  background(0);
  rectMode(CENTER);

  atom = new Atom(width/2, height/2);

  electronNum = random(50);
  for (let i = 0; i < electronNum; i++){
    electrons[i] = new electron(random(width), random(height));
  }
}

function draw() {
  atom.update();
  atom.display();

  for(let i = 0; i < electrons.length; i++){
    electrons[i].update();
    electrons[i].display();
  }

  push();
  // fill(255);
  title = createElement('h2', "</a> 3. atom");
  title.position(windowWidth/2 - 80, 0);
  pop();
}

function mousePressed(){
  save("atom.png")
}
