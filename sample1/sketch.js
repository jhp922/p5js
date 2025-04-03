let circleX = 150;  // 원의 초기 x 위치
let circleY = 100;  // 원의 초기 y 위치
let speed = 5;      // 원의 이동 속도

function setup() {
  createCanvas(400, 400);
  stroke(0);
  fill(30);
}

function draw() {
  background(200);
  
  if (keyIsDown(37) === true) {
    circleX -= speed;
  }

  if (keyIsDown(39) === true) {
    circleX += speed;
  }

  if (keyIsDown(38) === true) {
    circleY -= speed;
  }

  if (keyIsDown(40) === true) {
    circleY += speed;
  }

  // 원 그리기
  ellipse(circleX, circleY, 50, 50);
}