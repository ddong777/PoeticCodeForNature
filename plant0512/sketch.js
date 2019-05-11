let canvas;
let canvasX, canvasY;

let particleSystem;
let particleSystem2 = [];

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> particleSystem practice");
  title.position(20, 0);

  canvas = createCanvas(900, 900);
  canvas.class("artwork");
  centerCanvas();

  particleSystem = new ParticleSystem(
  createVector(random(width*0.48, width*0.52), random(height*0.65, height*0.7)));

  background(255);

  rectMode(CENTER);
  fill(120);
  rect(width / 2, height / 2, width * 0.75, height * 0.75);
}

function draw() {
  particleSystem.addParticle();
  particleSystem.run();
}

function mousePressed() {
  save('grow.png');
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

  constructor(position) {
    this.velocity = createVector(random(-1, 1), -1);
    this.position = position.copy();
    this.lifespan = random(55, 70);
    this.size = random(60);
    this.growValue = 0.9;
    this.isRoot = random(1);
  }

  run() {
    this.update();
    this.display();
    this.pColor();
    this.grow();
  }

  // Method to update position
  update() {
    if (this.isRoot > 0.5){
      this.acceleration = createVector(random(-0.2, 0.2), random(-0.05));
    } else{
      this.acceleration = createVector(random(-0.4, 0.4), random(0.05));
    }

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  grow() {
    this.lifespan -= random(0.8);
    if (this.size > 0) {
      this.size -= this.growValue;
    } else {
      this.size = 0;
    }

    if (frameCount >= 200 && this.growValue >= this.size / 400) {
      this.growValue -= 0.0075;
    }
  }

  // Method to display
  display() {
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  pColor() {
    stroke(50, 255 - this.lifespan*2);
    strokeWeight(2);
    fill(255, 50 + this.lifespan);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
class Confetti extends Particle {

  // Override the display method
  display() {
    rectMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    var theta = map(this.position.x, 0, width, -TWO_PI * 2, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, this.size, this.size);
    pop();
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    let m = random(1);
    if (m < 0.2) {
      let r = random(1);
      if (r < 0.5) {
        // this.particles.push(new Particle(this.origin));
        this.particles.push(new Confetti(this.origin));
      } else {
        this.particles.push(new Confetti(this.origin));
      }
    }
  }

  run() {
    // Run every particle
    // ES6 for..of loop
    for (let particle of this.particles) {
      particle.run();
    }

    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}
