var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var box,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

		
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(helicopterSprite.x , 200 , 51.2 ,51.2, {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	rect(ground.position.x,ground.position.y,width,10)
	
	box=createSprite(400,650,200,20);
	box.shapeColor=("RED")

	box=Bodies.rectangle(box.position.x,box.position.y,200,20,{isStatic:true})
	World.add(world, box);
	
	box2=createSprite(300,610,20,100)
	box2.shapeColor=("red");

	box2=Bodies.rectangle(box2.position.x,box2.position.y,20,100,{isStatic:true})
	World.add(world, box2);

	box3=createSprite(500,610,20,100);
	box3.shapeColor=("red")

	box3=Bodies.rectangle(box3.position.x,box3.position.y,20,100,{isStatic:true})
	World.add(world, box3);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y


  rect(box.position.x,box.position.y,200,10)

  drawSprites();
}

function keyPressed() {
 if (keyDown ("DOWN_ARROW")) {
 // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	
  }
}