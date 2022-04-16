var bu,wall;

var speed,w;

var fb;

var tk;

var button;

function setup(){
createCanvas(1600,400);

  tk=random(22,83);
  speed=random(50,100);
  w=random(30,52);


  wall=createSprite(1200,200,tk,height/2)
  wall.shapeColor=(80,80,80);

  bu=createSprite(200,200,25,10)



  

}

function draw(){
background("white");

bu.velocityX=speed;




if(is(bu,wall)){

  bu.velocityX=0;
  var dam=0.5*w*speed*speed/(tk*tk*tk);

if(dam>3){
wall.shapeColor=color(225,0,0);
}
if(dam<3){
  wall.shapeColor=color(0,225,0);
}

}



  drawSprites();
}

function is(b,wa){
 
 if(b.x-wa.x<b.width/2+wa.width/2 &&
  wa.x-b.x<b.width/2+wa.width/2 &&
  b.y-wa.y<b.height/2+wa.height/2 &&
  wa.y-b.y<b.height/2+wa.height/2){
    
   return true
 }
 else
 {
   return false
 }

}

