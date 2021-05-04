

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
 
}

function draw() {
  background(0,0,0);  

  hr = hour();
   min = minute();
   sec = second();

  translate(200,200)
  rotate(-90)

 
  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrangle  = map(hr,0,60,0,360)

push();
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,00)
  pop();
  
 
  
 push();
  rotate(minAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(00,0,100,00)
  pop();

  push();
  rotate(hrangle)
  stroke(0,255,0)
  strokeWeight(7)
  line(00,0,100,00)
  pop();
  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill();
  stroke(255,0,0)
  arc(0,0,300,300,0,secAngle)
  stroke(0,255,0)
  arc(0,0,280,280,minAngle)
  stroke(0,0,255)
  arc(0,0,260,260,0,hrangle)



 



  drawSprites();
}