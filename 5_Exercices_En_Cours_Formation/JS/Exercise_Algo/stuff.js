let apple, score;
let body = [];

function setup() {
  createCanvas(500, 400);
  frameRate(5);
  noStroke();

  body[0] = createVector(floor(width / 10) * 5, floor(height / 10) * 5);

  apple = newApple();
  score = 0;
}

function draw() {
  
  let m = 10;
  let x = 0;
  let y = 0;

  if (keyIsDown(LEFT_ARROW)) {
    x = -10;
  } else if (keyIsDown(UP_ARROW)) {
    y = -10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x = 10;
  } else if (keyIsDown(DOWN_ARROW)) {
    y = 10;
  }
  if(x != 0 || y != 0){
  let head = createVector((body[0].x + x + width)%width, (body[0].y + y + height)%height);
  
  body.unshift(head);
  let c = get(head.x, head.y);
  console.log(c);
  if (head.x == apple.x && head.y == apple.y) {
    apple = newApple();
    score++;
    frameRate(getTargetFrameRate() + 1);
  } else {
    body.pop();  
  }
  
  body[0] = head;
  } 
  
  background(220, 220, 220, 255);
    
  fill(0x00, 0x99, 0x00);
  for (let i = 0; i < body.length; i++) {
    ellipse(body[i].x, body[i].y, 10, 10);
  }
  
  fill(255, 0, 0);
  circle(apple.x, apple.y, 10);

  //console.log(score);
}

function newApple(){
  return createVector(round(random(width)/10)*10, round(random(height)/10)*10);
}