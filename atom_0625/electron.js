class electron{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.size = 5;

    this.maxSpeed = random(1, 2);
    this.maxForce = 3;

    this.setDist = 0.05 || 0.1 || 0.75;
  }

  update(){
    this.acc = p5.Vector.sub(atom.pos, this.pos);
    this.acc.setMag(this.setDist);

    this.vel.add(this.acc);
    this.vel.limit(this.maxForce);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display(){
    stroke(50);
    fill(255, 150);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
