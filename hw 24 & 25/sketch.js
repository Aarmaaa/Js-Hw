var b;

var bin,bin2,bin3

var ground;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){


}




function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(400,650,800,20)
	World.add(world,ground)
	ground.isStatic= true

	

	
	//Create the Bodies Here.
	
	bin=new Bi(650,500,120,150)
	
	
	b=new Paper(50,200,50,50)

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  rect(400,650,800,20)  


  b.displace();			
  bin.displace();
	
 
   drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b.body,b.body.position,{x:0.085,y:-0.150})
	}


}
