class branch {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.desired = createVector(0, 0);
    this.steering = createVector(0, 0);
    this.d = createVector(0, 0);

    this.maxSpeed = 2;
    this.maxForce = 0.5;

    this.density = 100;
    this.r = 10;

    this.energy = 50;
    this.growSpeed = createVector(0, 0);
    this.growWeight = 0;
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.applyForce(p5.Vector.random2D(1));

    this.vel.add(this.acc);
    this.steering.limit(this.maxForce);
    this.vel.limit(this.maxForce);

    this.pos.add(this.vel);
  }

  seekLight(target){
    this.desired = p5.Vector.sub(target, this.pos);

    this.d = this.desired.mag();
    if (this.d < 80){
      this.m = map(this.d, 0, 100, 0, this.maxSpeed);
      this.desired.setMag(this.m);
    } else if (this.d > 200){
      this.applyForce(p5.Vector.random2D(1));
    } else {
      this.desired.setMag(this.maxSpeed);
    }

    this.steering = p5.Vector.sub(this.desired, this.vel);
    this.applyForce(this.steering);
  }

  growing(){
    if (this.d < 200){
      this.energy += random(-0.7, 0.7);
    } else {
      this.energy -= 0.1;
    }

    if (this.energy <= 0.05){
      this.energy = 0;
      strokeWeight(0);
    }
  }

  display() {
    this.growing();

    stroke(0, this.density);
    fill(255, this.density);
    ellipse(this.pos.x, this.pos.y, this.energy);
  }
}
