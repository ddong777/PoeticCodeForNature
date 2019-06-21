class divergence {
  constructor(x, y) {
    this.branches = [];
    this.branchNum = random(5, 20);

    for (let i = 0; i < this.branchNum; i++) {
      this.branches[i] = new branch(x, y);
    }
  }

  update(light) {
    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].update();
      this.branches[i].display();
      if (lightOn == true){
        this.branches[i].seekLight(light);
      }
    }
  }

  display() {

  }
}
