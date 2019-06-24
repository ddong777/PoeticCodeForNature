class headCell{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.size = 1;

    this.maxSpeed = 10;
    this.maxForce = 5;
  }

  applyForce(force){
    this.acc.add(force);
  }

  applyBehaviors(target){
    this.seekForce = this.seek(target);

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

  update(){
    this.randomMove = p5.Vector.random2D();
    this.randomMove.mult(0.1);
    this.applyForce(this.randomMove);

    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.edge();

    this.acc.set(0, 0);
  }

  display(){
    stroke(0);
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  edge(){
    if (this.pos.x >= width){
      this.acc.x --;
    } else if (this.pos.x <= 0){
      this.acc.x ++;
    } else if (this.pos.y >= height){
      this.acc.y --;
    } else if (this.pos.y <= 0){
      this.acc.y ++;
    }
  }
}
