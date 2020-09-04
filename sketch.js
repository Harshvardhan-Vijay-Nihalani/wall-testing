var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3;
var speed1,weight1,speed2,weight2,speed3,weight3,speed4,weight4;
var obstacle1,obstacle2,obstacle3,obstacle4;
var x;
var thickness1,thickness2,thickness3,thickness4;
var wallThickness1,wallThickness2,wallThickness3,wallThickness4;
function setup() {
  createCanvas(1600,400);
  wallThickness1=random(22,83);
  obstacle1=createSprite(1500,50,wallThickness1,100);
  obstacle1.shapeColor="blue";
  thickness1=random(22,83);
  speed1=random(223,321);
  weight1=random(30,52);
  bullet1= createSprite(50,50,20,thickness1);
  bullet1.velocityX=speed1;
  bullet1.shapeColor="white";
  wall1=createSprite(800,100,1600,2);
  wall1.shapeColor="green";
  wallThickness2=random(22,83);
  obstacle2=createSprite(1500,150,wallThickness2,100);
  obstacle2.shapeColor="blue";
  thickness2=random(22,83);
  speed2=random(223,321);
  weight2=random(30,52);
  bullet2= createSprite(50,150,20,thickness2);
  bullet2.velocityX=speed2;
  bullet2.shapeColor="white";
  wall2=createSprite(800,200,1600,2);
  wall2.shapeColor="green";
  wallThickness3=random(22,83);
  obstacle3=createSprite(1500,250,wallThickness3,100);
  obstacle3.shapeColor="blue";
  thickness3=random(22,83);
  speed3=random(223,321);
  weight3=random(30,52);
  bullet3= createSprite(50,250,20,thickness3);
  bullet3.velocityX=speed3;
  bullet3.shapeColor="white";
  wall3=createSprite(800,300,1600,2);
  wall3.shapeColor="green";
  wallThickness4=random(22,83);
  thickness4=random(22,83);
  obstacle4=createSprite(1500,350,wallThickness4,100);
  obstacle4.shapeColor="blue";
  speed4=random(223,321);
  weight4=random(30,52);
  bullet4= createSprite(50,350,20,thickness4);
  bullet4.velocityX=speed4;
  bullet4.shapeColor="white";
}

function draw() {
  background("black");
  if(bullet1.isTouching(obstacle1)){
    x=(0.5*weight1*speed1*speed1)/(wallThickness1*wallThickness1*wallThickness1);
    bullet1.velocityX=0;
    if(x<=10){
      obstacle1.shapeColor="green";
    }else if(x>10){
      obstacle1.shapeColor="red";
    }
  }
  if(bullet2.isTouching(obstacle2)){
    x=(0.5*weight2*speed2*speed2)/(wallThickness2*wallThickness2*wallThickness2);
    bullet2.velocityX=0;
    if(x<=10){
      obstacle2.shapeColor="green";
    }else if(x>10){
      obstacle2.shapeColor="red";
    }
  }
  if(bullet3.isTouching(obstacle3)){
    x=(0.5*weight3*speed3*speed3)/(wallThickness3*wallThickness3*wallThickness3);
    bullet3.velocityX=0;
    if(x<=10){
      obstacle3.shapeColor="green";
    }else if(x>10){
      obstacle3.shapeColor="red";
    }
  }
  if(bullet4.isTouching(obstacle4)){
    x=(0.5*weight4*speed4*speed4)/(wallThickness4*wallThickness4*wallThickness4);
    bullet4.velocityX=0;
    if(x<=10){
      obstacle4.shapeColor="green";
    }else if(x>10){
      obstacle4.shapeColor="red";
    }
  }
   
  drawSprites();
}