function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(200);
  
    // Style the circle.
    let c = frameCount % 255;
    fill(c);
  
    // Display the circle.
    circle(width/2, height/2, 300);
  }
  
  // Save a 5-second gif when the user presses the 's' key.
  function keyPressed() {
    if (key === 's') {
      saveGif('mySketch', 5);
    }
  }