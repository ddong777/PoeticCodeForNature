class cell{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.startSize = random();
    this.size = random(2, 20);

    this.maxSpeed = random(1, 2);
    this.maxForce = 3;

    this.desiredSeperation = this.size*5;
  }

  applyForce(force){
    this.acc.add(force);
  }

  applyBehaviors(other, head){
    this.separateForce = this.seperate(other);
    this.seekForce = this.seek(head);

    // this.separateForce.mult(1);
    // this.seekForce.mult(1);

    this.applyForce(this.separateForce);
    this.applyForce(this.seekForce);
  }

  seek(target){
    this.desired = p5.Vector.sub(target, this.pos);

    this.d = this.desired.mag();
    if (this.d < 100){
      this.m = map(this.d, 0, 100, 0, this.maxSpeed);
      this.desired.setMag(this.m);
    } else{
      this.desired.setMag(this.maxSpeed);
    }

    this.steering = p5.Vector.sub(this.desired, this.vel);
    this.steering.limit(this.maxForce);
    return this.steering;
  }

  seperate(other){
    this.sum = createVector(0, 0);
    this.count = 0;

    for (let i = 0; i < other.length; i++){
      this.d = p5.Vector.dist(this.pos, other[i].pos);
      if ((this.d > 0) && (this.d < this.desiredSeperation)){
        this.diff = p5.Vector.sub(this.pos, other[i].pos);
        this.diff.normalize();
        this.diff.div(this.d);
        this.sum.add(this.diff);
        this.count++;
      }
    }

    if (this.count > 0){
      this.sum.div(this.count);
      this.sum.normalize();
      this.sum.mult(this.maxSpeed);

      this.steer = p5.Vector.sub(this.sum, this.vel);
      this.steer.limit(this.maxForce);
      return this.steer;
    }
  }

  update(){
    this.randomMove = p5.Vector.random2D();
    this.randomMove.setMag(0.1);

    this.applyForce(this.randomMove);
    this.vel.limit(this.maxForce);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display(){
    stroke(50, 100);
    fill(255, 10);
    if (this.startSize > this.size){
      this.startSize -= 0;
    } else {
      this.startSize += 0.3;
    }

    push();
    stroke(255, 50);
    line(this.pos.x, this.pos.y, head.pos.x, head.pos.y);
    pop();

    rect(this.pos.x, this.pos.y, this.startSize + random(), this.startSize + random());
  }
}
