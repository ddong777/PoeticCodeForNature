let canvas;
let x, y;
let lightOn;
let plants = [];

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> growing plant");
  title.position(windowWidth/2, 0);

  canvas = createCanvas(1000, 800);
  canvas.class("artwork");
  centerCanvas();

  //========================================================
  background(0);

  //========================================================
  lightOn = false;

  //========================================================
  plants.push(new divergence(width/2, height/2));
}

function draw() {
  let lightMouse = createVector(mouseX, mouseY);

  plants.push(new divergence(mouseX, mouseY));

  for(let i = 0; i < plants.length; i++){
    plants[i].update(lightMouse);
    plants[i].display();
  }

  if (lightOn == true){
    noFill();
    stroke(255, 30);
    strokeWeight(2);
    let lightSize = random(0, 100);
    ellipse(mouseX, mouseY, lightSize, lightSize);
  }
}

function mousePressed() {
  // branches.push(new branch(mouseX, mouseY));

  if (lightOn == true){
    lightOn = false;
  } else if (lightOn == false) {
    lightOn = true;
  }
}
