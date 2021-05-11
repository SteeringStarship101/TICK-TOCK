var hr 
var mn 
var sc 

function setup() {
  createCanvas(700,600);
  hr = hour();
 mn = minute();
 sc = second();
  angleMode(DEGREES);
}

function draw() {
  background(255)
  hr = hour();
  mn = minute();
  sc = second();



textFont("arial");
textSize(18);
noStroke();
fill("white");
text("12", 345,120);

noStroke();
fill("white");
text("3", 480,255);

noStroke();
fill("white");
text("9", 190,255);

noStroke();
fill("white");
text("6", 350,400);

//Translation and rotation 
translate(350,250)
rotate(-90)



//To create ab iterative rotation
strokeWeight(8);
stroke("pink");
noFill();
scAngle = map(sc, 0, 60, 0, 360);
strokeWeight(8);
stroke(154, 234, 101);
mnAngle = map(mn,0,60,0,360);
strokeWeight(8);
stroke(137, 96, 253);
hrAngle = map(hr % 12,0,12,0,360);

//drawing seconds hand
push();
rotate(scAngle); 
stroke("cyan");
strokeWeight(5);
line(0,0,150,0);
pop()

//drawing minutes hand
push();
rotate(mnAngle);
stroke("KHAKI");
strokeWeight(7.5);
line(0,0,115,0);
pop()

//drawing hour hand
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(10);
line(0,0,75,0);
pop()

stroke(255,0,255);
point(0,0)

//drawing the arcs
strokeWeight(5);
noFill();
//Seconds
stroke("cyan");
arc(0,0,400,400,0,scAngle);
//Minutes
strokeWeight(7.5);
stroke(0,255,0);
arc(0,0,370,370,0,mnAngle);
//Hour
strokeWeight(10);
stroke("khaki");
arc(1000,20,340,340,0,hrAngle);

drawSprites();
}