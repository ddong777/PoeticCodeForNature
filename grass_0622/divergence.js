class divergence {
  constructor(x, y) {
    this.branches = [];
    this.branchNum = random(2, 7);
    this.divergenceBang = false;
    this.seed = createVector(0, 0);

    for (let i = 0; i < this.branchNum; i++) {
      this.branches[i] = new branch(x, y);
    }
  }

  update(light) {
    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].update();
      this.branches[i].display();

      if (this.branches[i].makeDivergence == true){
        this.divergenceBang = true;
        this.seed = this.branches[i].pos;
        this.branches.splice(1,i);
      } else{
        this.divergenceBang = false;
      }
    }
  }

  display() {
  }
}
