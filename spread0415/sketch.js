let canvas;
let canvasX, canvasY;

let particles = [];
let xoff = 0;

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> spread particles");
  title.position(20, 0);

  canvas = createCanvas(600, 800);
  canvas.class("artwork");
  centerCanvas();

  for (let i = 0; i < 50; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

function draw() {
  background(255, 0.1);

  let gravity = createVector(0, 0.1);
  let wind = createVector(map(noise(xoff), 0, 1, -0.1, 0.1), 0);

  xoff += 0.01;

  for (let i = 0; i < particles.length; i++) {
    particles[i].getForce(gravity);
    particles[i].getForce(wind);

    particles[i].update();
    particles[i].show();
  }
}

function mousePressed(){
  save();
}

class Particle {
  constructor() {
    this.pos = createVector(width/2, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  getForce(force){
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.variable = random(0.9999, 0.999);
    this.vel.mult(this.variable);
    this.edge();
  }

  edge(){
    if(this.pos.y >= height - 10){
      this.vel.y *= -1;
      this.pos.y = height - 10;
    }
    if(this.pos.x >= width - 10){
      this.vel.x *= -1;
      this.pos.x = width - 10;
    }
    if(this.pos.x <= 10){
      this.vel.x *= -1;
      this.pos.x = 10;
    }
  }

  show() {
    stroke(255);
    fill(255);
    point(this.pos.x, this.pos.y);
  }
}
