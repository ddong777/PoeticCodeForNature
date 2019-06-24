let canvas;
let x, y;
let plants = [];

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(windowWidth*0.8, windowHeight*0.9);
  canvas.class("artwork");
  centerCanvas();

  //========================================================
  background(255);

  //========================================================
  plants.push(new divergence(width/2, height/2));
}

function draw() {
  for(let i = 0; i < plants.length; i++){
    plants[i].update();
    plants[i].display();

    if (plants[i].divergenceBang == true && plants.length < 40){
      plants.push(new divergence(plants[i].seed.x, plants[i].seed.y));
      plants[i].divergenceBang = false;
    }

    if (plants.length >= 40){
      plants.splice(1,i);
    }
  }
  title = createElement('h2', "</a> 1. roots explosion.");
  title.position(windowWidth/2 - 150, 0);
}

function mousePressed() {
  save("rootsExplosion.png");
}
