class grass {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.density = 100;

    this.growTime = random(50, 70);
    this.lifeTime = random(500, 600);
    this.die = false;

    this.r = 0;
    this.growUP = 0;
    this.startR = random(5, 10);
    this.middleR = random(30, 40);
    this.endR = 0;
  }

  addForce(force){
    this.acc.add(force);
  }

  update() {
    this.addForce(p5.Vector.random2D());

    this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.growTime -= 0.1;
    this.r += this.growUP;

    this.growPhase1();
    this.lifespan();
  }

  followLight(attractor){
    let followingForce = p5.Vector.sub(attractor, this.pos);
    followingForce.setMag(0.3);
    this.addForce(followingForce);
  }

  display() {
    stroke(0, this.density);
    fill(255, this.density);
    ellipse(this.pos.x, this.pos.y, 10);
  }

  growPhase1() {
    if (this.r <= this.startR) {
      this.growUP = 0;
    } else {
      this.growUP = 0.1;
    }
  }

  lifespan(){
    this.lifeTime --;
    if (lightOn){
      this.lifeTime += 0.5;
    }
    if (this.lifeTime <= 0){
      this.die = true;
    } else {
      this.die = false;
    }
  }
}
