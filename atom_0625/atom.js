class Atom{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.size = random(30, 50);
  }

  update(){

  }

  display(){
    stroke(255);
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
