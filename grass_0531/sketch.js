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

  branchNum = random(100);
  for (let i = 0; i < branchNum; i++) {
    grs[i] = new grass(width/2, height/2);
  }

  lightOn = false;
}

function draw() {
  background(0, 5);
  let attractorMouse = createVector(mouseX, mouseY);

  for (let i = 0; i < grs.length; i++) {
    grs[i].update();
    grs[i].display();
    if (lightOn == true){
      grs[i].followLight(attractorMouse);
    }

    if (grs[i].die){
      grs.splice(i, 1);
    }
  }

  if (lightOn == true){
    noStroke();
    fill(255, 80);
    ellipse(mouseX, mouseY, random(20, 70), random(20, 70));
  }
}

function mousePressed() {
  grs.push(new grass(mouseX, mouseY));

  if (lightOn == true){
    lightOn = false;
  } else if (lightOn == false) {
    lightOn = true;
  }
}
