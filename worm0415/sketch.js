let canvas;
let canvasX, canvasY;

let w = [];

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
}

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 10 print practice");
  title.position(20, 0);

  canvas = createCanvas(500, 800);
  canvas.class("artwork");
  centerCanvas();

  background(220);
  for(let i = 0; i < 20; i++){
    w[i] = new Walker();
  }
}

function draw() {
  for(let i = 0; i < w.length; i++){
  w[i].update();
  w[i].edge();
  w[i].display();
  }
  // background(220, 10);
}

function mouseClicked() {
  save();
}

function Walker() {
  // this.pos = createVector(width / 2, height / 2);
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.w = random(5, 40);

  this.strC = int(random(-5, 260));
  this.fllC = abs(255 - this.strC) % 255;

  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.setMagValue = random(0.1, 0.5);
  this.rotateValue = random(0.1, 0.5);

  this.update = function() {
    //this.acc = createVector(random(-1, 1), random(-1, 1));
    //this.acc = p5.Vector.fromAngle(random(TWO_PI));

    this.acc.setMag(this.setMagValue);
    this.acc.rotate(this.rotateValue);

    //this.setMg();

    this.vel.add(this.acc);
    this.vel.limit(4);
    this.pos.add(this.vel);

    // this.w += 0.1;
  }

  this.setMg = function() {
    if (keyIsPressed == true) {
      //background(255, 20);
      //this.pos.set(width/2, height/2);
      if (keyIsDown(UP_ARROW)) {
        this.setMagValue += 0.025;
      } else if (keyIsDown(DOWN_ARROW)) {
        this.setMagValue -= 0.025;
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.rotateValue += 0.025;
      } else if (keyIsDown(LEFT_ARROW)) {
        this.rotateValue -= 0.025;
      }
      print("setMagValue = " + this.setMagValue + ", rotateValue = " + this.rotateValue);
    }
  }

  this.edge = function() {
    if (this.pos.x > width || this.pos.x < 0) this.vel.x *= -1;
    if (this.pos.y > height || this.pos.y < 0) this.vel.y *= -1;
  }

  this.display = function() {
    fill(this.fllC);
    stroke(this.strC);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
