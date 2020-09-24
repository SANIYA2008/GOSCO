var car,car1,wall,wall1 ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(50,200,25,25);
car1 = createSprite(10,350,25,25)
 wall = createSprite(1500,200,60,120);
 wall1 = createSprite(1200,200,60,120);
 wall.shapeColor = color (80,80,80);
}


function draw() {
  background(80,80,80);  

  car.velocityX = speed ; 
  car1.velocityX = speed ;

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = color(500,0,0);
        car1.shapeColor = color(500,233,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = color(500,233,0);
        car1.shapeColor = color(0,500,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = color(0,500,0);
        car.shapeColor = color(500,0,0);
      }
    } 
    drawSprites();
  }
 