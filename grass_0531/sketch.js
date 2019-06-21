let canvas;
let x, y;
let grs = [];
let branchNum;
let lightOn;

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

  background(0);

  branchNum = random(5, 20);
  for (let i = 0; i < branchNum; i++) {
    grs[i] = new grass(width/2, height/2);
  }

  lightOn = false;
}

function draw() {
  let attractorMouse = createVector(mouseX, mouseY);

  for (let i = 0; i < grs.length; i++) {
    grs[i].update();
    grs[i].display();
    if (lightOn == true){
      grs[i].seekLight(attractorMouse);
    }
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
  // grs.push(new grass(mouseX, mouseY));

  if (lightOn == true){
    lightOn = false;
  } else if (lightOn == false) {
    lightOn = true;
  }
}
