let size = 20; 

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(212);        
  fill(193, 251, 238);    

 
  let sides = 26 - hour();

 
  let big = 250 - minute() * 3;

 
  let target = 20;
  if (second() % 2 == 0) {
    target = big;
  }

 
  size = lerp(size, target, 0.1);


  drawShape(sides, size);
}


function drawShape(sides, size) {
  translate(300, 300); 
  beginShape();
  for (let i = 0; i < sides; i++) {
    let angle = TWO_PI / sides * i;
    vertex(sin(angle) * size, -cos(angle) * size);
  }
  endShape(CLOSE);
}
