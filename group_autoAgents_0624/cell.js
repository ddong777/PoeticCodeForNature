class cell{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.size = random(80, 110);

    this.maxSpeed = random(0.3, 2);
    this.maxForce = 1;
  }

  applyForce(force){
    this.acc.add(force);
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
    this.applyForce(this.steering);
  }

  seperate(target){

  }

  update(){
    this.randomMove = p5.Vector.random2D();
    this.randomMove.setMag(0.2);
    
    this.applyForce(this.randomMove);
    this.vel.limit(this.maxForce);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display(){
    stroke(0, 0, random(200, 255), 50);
    fill(255, 10);
    if (this.size < random(30, 50)){
      this.size -= 0;
    } else {
      this.size -= 0.3;
    }

    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
