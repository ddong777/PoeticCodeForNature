class branch {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.energy = random(50, 70);
    this.makeDivergence = false;
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.applyForce(p5.Vector.random2D());
    this.acc.setMag(0.07);
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.edge();
    
    this.acc.set(0, 0);
  }

  growing(){
    if (this.energy <= 70 && this.energy > 5){
      this.energy += random(-0.9, 0.5);
    } else if (this.energy > 70){
      this.energy -= 5;
    } else if (this.energy >= -70) {
      this.energy += random(-0.5, 0.9);
    } else if (this.energy < -70){
      this.energy += 5;
    }

    if (this.energy < 5.2 && this.energy > 5 ){
      this.makeDivergence = true;
    } else {
      this.makeDivergence = false;
    }
  }

  display() {
    this.growing();
    stroke(50, 100);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.energy);
  }

  edge(){
    if(this.pos.x >= width){
      this.pos.x -= 0.5;
    } else if (this.pos.x <= 0){
      this.pos.x += 0.5;
    } else if(this.pos.y >= height){
      this.pos.y -= 0.5;
    } else if (this.pos.y <= 0){
      this.pos.y += 0.5;
    }
  }
}
