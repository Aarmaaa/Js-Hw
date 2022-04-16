const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var player

var ground,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10

var l


var we,we2,we3,we4,we5,we6,we7,we8,we9

var gameState='PLAY'

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(900, 700);
	
	l=createSprite(0,350,10,800)
	l.shapeColor="black"

	player=createSprite(100,-50,20,20)
	World.add(world,player)
	
	
	ground=createSprite(450,690,900,20)
	ground.shapeColor="black"
	ground2=createSprite(200,560,100,20)
	ground3=createSprite(400,430,100,20)
	ground4=createSprite(600,300,20,100)
	ground5=createSprite(400,200,100,20)
	ground6=createSprite(330,315,25,20)
	ground7=createSprite(790,250,80,20)
	ground8=createSprite(750,210,20,100)
	ground9=createSprite(200,75,100,20)
 

	we=createSprite(147,562,5,15)
	we.shapeColor="red"

	we2=createSprite(252,560,5,18)
	we2.shapeColor="red"

	we3=createSprite(348,432,5,18)
	we3.shapeColor="red"

	we4=createSprite(350,275,5,55)
	we4.shapeColor="red"

	we5=createSprite(587,330,5,35)
	we5.shapeColor="red"

	we6=createSprite(385,188,70,5)
	we6.shapeColor="red"

	we7=createSprite(305,225,5,120)
	we7.shapeColor="red";

	we8=createSprite(800,150,70,5)
	we8.shapeColor="red"

	we9=createSprite(850,200,5,60)
	we9.shapeColor="red"

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
player.collide(l);
player.collide(ground7)
player.collide(ground8)


if(gameState='PLAY'){
  
if(player.isTouching(we)||player.isTouching(we2)||player.isTouching(we3)||player.isTouching(we4)
||player.isTouching(we5)||player.isTouching(we6)||player.isTouching(we7)||player.isTouching(we8)||player.isTouching(we9)){
			player.position.x=50
			player.position.y=300
			
		}
		
		if(player.isTouching(ground||player.isTouching(ground2)||player.isTouching(ground4)
		||player.isTouching(ground5)||player.isTouching(ground6)||player.isTouching(ground7)||player.isTouching(ground8))){
			player.position.x=50
			
  }

	if(keyWentDown("Space")){
	player.velocityY=player.velocityY-15	
  }
  
  
  player.velocityY=player.velocityY+0.8

  if(keyDown(LEFT_ARROW)){
	  player.position.x=player.position.x-8
  }
  else if(keyDown(RIGHT_ARROW)){
	player.position.x=player.position.x+8
  }

  if(we9.position.y==200){
	  we9.velocityY=1
  }
  else if(we9.position.y==250){
	  we9.velocityY=-1
  }

	drawSprites();
}
 
}