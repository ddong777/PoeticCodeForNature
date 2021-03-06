let canvas;
let canvasX, canvasY;

let w = [];

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> tentacle");
  title.position(20, 0);

  canvas = createCanvas(700, 500);
  canvas.class("artwork");
  centerCanvas();

  for (let i = 0; i < 20; i++) {
    w[i] = new Walker();
  }
  background(0);
}

function draw() {
  for (let i = 0; i < w.length; i++) {
    w[i].update();
    w[i].display();
  }
  fill(255);
  stroke(255);
  //ellipse(width / 2, height / 2, 100, 100);
}

function mousePressed(){
  save();
}

class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.h = 200;
    this.alphaV = 0;
    this.xoff = random(100);
  }

  update() {
    this.a = noise(this.xoff);
    this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.xoff += 0.1;

    this.acc.mult(2);
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);

    if (this.h < 1) {
      this.h = 0;
      this.acc.set(0);
      this.vel.set(0);
      this.alphaV = 0;
    } else {
      this.alphaV = 170;
      this.h -= this.a * random(0, 3);
    }
  }

  display() {
    fill(255, 100);
    stroke(0, this.alphaV);
    ellipse(this.pos.x, this.pos.y, this.h);
  }

}
