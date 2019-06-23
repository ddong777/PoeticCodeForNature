class{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  applyForce(force){

  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display(){

  }
}
