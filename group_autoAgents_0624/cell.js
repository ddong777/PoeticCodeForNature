class{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.size = random(10, 30);

    this.maxSpeed = 5;
    this.maxForce = 2;
  }

  applyForce(force){
    this.acc.add(force);
  }

  seek(target){
    this.desired = p5.Vector.sub(target, this.pos);

    this.d = desired.mag();
    if (d < 100){
      this.m = map(d, 0, 100, 0, this.maxSpeed);
      this.desired.setMag(this.m);
    } else{
      desired.setMag(this.maxSpeed);
    }

    this.steering = p5.Vector.sub(this.desired, this.vel);
    this.steering.limit(this.maxForce);
    this.applyForce(this.steering);
  }

  update(){
    seek(createVector(mouseX, mouseY));
    this.vel.limit(this.maxForce);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
