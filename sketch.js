var landscape;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);

 button = createButton('Go to Shape Match');
  button.position(150, 200);

 button.mousePressed(goToShapeMatch);
}

function draw() {
  imageMode(CENTER);
  image(landscape, width/2, height/2);

}

function buildBackground(){
 landscape = loadImage('background.png');
}

function goToShapeMatch() {
  // Redirect to shapeMatch.html page
  window.location.href = 'shapeMatch.html';
}
