var x = 1;
var y = 1;
var dx = 1;
var dy = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  source = new p5.AudioIn();
  source.start();
  source.connect();
}

function draw() {
  if (x <= 0 || x >= width) {
    dx = -dx;
  }

  if (y <= 0 || y >= height) {
    dy = -dy;
  }

  var level = source.getLevel() * 100;
  x += dx * level;
  y += dy * level;

  ellipse(width / 2, height / 2, x, y);
}
