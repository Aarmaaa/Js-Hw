const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player

var ground,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,gimg

var doen1,doen2,doen3,doen4,doen5,doen6,doen6,downenemyimg

var bouncepad,bouncepadimg

var gameState='PLAY'

function preload()
{
	gimg=loadImage("ground.png");

	downenemyimg=loadImage("downenemy.png");

	bouncepadimg=loadImage("bouncePad.png")

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(900, 700);
		

	player=createSprite(0,650,20,20)
	World.add(world,player)
	
	
	ground=createSprite(50,690,10,20)
	ground.size=3

	ground2=createSprite(980,690,10,20)
	ground2.size=3

	ground3=createSprite(1910,690,10,20)
	ground3.size=3;

	ground4=createSprite(2840,690,10,20);
	ground4.size=3

	ground5=createSprite(3770,690,10,20);
	ground5.size=3;

	ground6=createSprite(4700,690,10,20);

	bouncepad=createSprite(1250,600,10,20)

//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(225);

player.collide(ground);
player.collide(ground2);
player.collide(ground3);
player.collide(ground4);
player.collide(ground5);
player.collide(ground6);

ground.addImage(gimg)
ground2.addImage(gimg)
ground3.addImage(gimg)
ground4.addImage(gimg)
ground5.addImage(gimg)
ground6.addImage(gimg)

bouncepad.addImage(bouncepadimg)

if(gameState=='PLAY'){
enemys();
if(player.position.x<50||player.position.x>0){
camera.position.x=player.position.x
//camera.position.y =player.position.y
}

	if(keyWentDown("Space")){
	player.velocityY=player.velocityY-13
  }
  
  player.velocityY=player.velocityY+0.7

  if(keyDown(LEFT_ARROW)){
	  player.position.x=player.position.x-15	
  }
  else if(keyDown(RIGHT_ARROW)){
	player.position.x=player.position.x+15
  }
}  
	drawSprites();

 
}

function enemys(){
	 
	doen1=createSprite(500,585)
	doen1.addImage(downenemyimg);
	doen1.size=0.1

	doen1=createSprite(800,585)
	doen1.addImage(downenemyimg);
}