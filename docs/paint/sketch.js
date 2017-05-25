function setup() {
  createCanvas(500, 500);
  background(0, 220, 220);
}

function mouseDragged() {
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, 10, 10);
  stroke(0);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function keyPressed () {
  background(0, 220, 220);
  return false
}