//팔, 안경, 입
//안경-->회전
//입-->위방향키하면 방향 반대로
//팔-->클릭하면 올리기 O

let leftRotation = 0;
let rightRotation = 0; 
let rotateLeft = false;
let rotateRight = false;

function setup() {
    createCanvas(800, 700);
  }
  
  function draw() {
    background(240);
    
    //하체
    stroke(0);
    fill(240);
    triangle(404, 545,370, 701, 440, 701);
    
    line(356, 559, 330, 700);
    line(450, 561, 479, 700);
    
    
    //몸통
    stroke(255, 160, 122);
    fill(255, 140, 100);
    triangle(399, 326, 357, 360, 450, 360);
    
    noStroke();
    fill(0);
    rect(357, 359, 94, 200);
    
    arc(450, 460, 50, 200, PI+HALF_PI, HALF_PI);
    
    arc(360, 460, 50, 200, HALF_PI, HALF_PI+PI);
    
    //팔
    if (mouseIsPressed && mouseX <=400) {
      stroke(0);
      fill(0);
      quad(367, 379, 351, 364, 309, 404, 324, 424);
      quad(324, 424, 307, 433, 258, 368, 274, 353);
      
      stroke(255, 140, 100);
      fill(255, 140, 100);
      circle(258, 344, 30);
    } else {
      stroke(0);
      fill(0);
      quad(367, 379, 351, 364, 272, 442, 294, 456);
      
      stroke(255, 140, 100);
      fill(255, 140, 100);
      circle(273, 458, 30);
    }
    
    if (mouseIsPressed && mouseX >=400) {
      stroke(0);
      fill(0);
      quad(442, 377, 456, 364, 500, 401, 486, 420);
      quad(483, 417, 498, 431, 534, 379, 519, 367);
      
      
      stroke(255, 140, 100);
      fill(255, 140, 100);
      circle(529, 365, 30);
    } else {
      stroke(0);
      fill(0);
      quad(442, 377, 456, 364, 532, 430, 514, 448);
      
      stroke(255, 140, 100);
      fill(255, 140, 100);
      circle(531, 444, 30);
    }
    
    //얼굴
    stroke(255, 160, 122);
    fill(255, 160, 122);
    rect(300, 120, 200, 200);
    
    arc(300, 220, 35, 200, HALF_PI, HALF_PI + PI);
    
    arc(500, 220, 25, 200, HALF_PI + PI, HALF_PI);
    
    arc(400, 320, 204, 45, 0, PI);
    
    //눈
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(350, 200, 40, 20);
    
    ellipse(450, 200, 40, 20);
    
    fill(0);
    circle(350, 200, 10);
    
    circle(450, 200, 10);
    
    //안경
    stroke(0);
    strokeWeight(5);
    noFill();

    // 왼쪽 사각형
    push();
    translate(350, 200); // 왼쪽 사각형 중심으로 이동
    rotate(leftRotation); // 회전 적용
    rect(-30, -20, 60, 40); // 중심 기준으로 사각형 그리기
    pop();

    // 오른쪽 사각형
    push();
    translate(450, 200); // 오른쪽 사각형 중심으로 이동
    rotate(rightRotation); // 회전 적용
    rect(-30, -20, 60, 40); // 중심 기준으로 사각형 그리기
    pop();

    // 안경 연결선
    line(380, 200, 415, 200);
    line(480, 200, 510, 188);
    line(317, 200, 285, 187);

    // 회전 상태 업데이트
    if (rotateLeft) {
        leftRotation += 0.05; // 왼쪽 사각형 회전 속도
    }
    if (rotateRight) {
        rightRotation += 0.05; // 오른쪽 사각형 회전 속도
    }
    
    //코
    line(398, 201, 395, 244);
    
    line(396, 244, 404, 257);
    
    //입
    if (keyCode === UP_ARROW) {
      stroke(0);
      strokeWeight(5);
      noFill();
      arc(400, 277, 60, 40, radians(40), radians(160));
    } else{
      stroke(0);
      strokeWeight(5);
      noFill();
      arc(400, 296, 60, 40, radians(220), radians(320));
    }
    
    //머리
    stroke(0);
    strokeWeight(1);
    fill(0);
    arc(399, 140, 217, 100, PI, TWO_PI);
    
    arc(294, 166, 35, 60, HALF_PI, HALF_PI + PI);
    arc(500, 165, 35, 60, PI + HALF_PI, HALF_PI);
    
    stroke(255, 255, 0);
    strokeWeight(1);
  }
  
    function keyPressed() {
      if (key === 'l') {
          rotateLeft = true;
      } else if (key === 'r') {
          rotateRight = true;
      } else if (key === 's') {
          rotateLeft = false;
          rotateRight = false;
      } else if (key === 'c') {
          saveGif('mySketch', 10);
      }
  }

  // 문제점
  // 1. esc 후에 윗방향키 누르면 안경 다시 생김
  // 2. esc 후에 입모양도 원래대로 바뀜