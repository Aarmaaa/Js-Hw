var PLAY=1;
var END=0;
var gameState=PLAY;

var score=0;

//monkey
var mi, m;

//water background
var bi, bg, g;

//groung bg
var bg2, bi2;

var s, b;

var sg,bag;

var go,goi;

function preload() {
  //monkey animationR
  mi = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  //backgroung image
  bi = loadImage("j1.png");
  //ground bg image
  bi2 = loadImage("j2.png");

  s = loadImage("stone.png");

  b = loadImage("banana.png");
  
  goi=loadImage("gameover.png");
  
}

function setup() {
  createCanvas(1200, 500);
  //create bg & ground bg
  bg = createSprite(1251, 280);
  bg.addImage(bi);

  bg2 = createSprite(400, 281);
  bg2.addImage(bi2);

  g = createSprite(200, 295, 400, 5);
  g.visible = false;

  l = createSprite(825, 165, 5, 250);
  l.shapeColor = "green";

  l2 = createSprite(825, 320, 5, 60);
  l2.shapeColor = "yellow";

  m = createSprite(200, 248);
  m.addAnimation("p", mi);
  m.scale = 0.15;
  m.setCollider("circle",0,0,250);
  
  sg=createGroup();
  bag=createGroup();
  
}

function draw() {

  
  m.collide(g);
if(gameState==PLAY){
  
  stone();
  banana();
 
  
  
  l.x = bg.x - 425;
  l2.x = bg.x - 425;
  bg.velocityX = -5;
  bg2.velocityX = -5;
  l.velocityX = -5;
  l2.velocityX = -5;
  
  if (keyDown("Space") && m.y > 200) {
    m.velocityY = -13;
  }
  
  m.velocityY = m.velocityY + 0.8;

  if (bg.x < -430) {
    bg.x = 1251;
  }
  
  if (bg2.x < -430) {
    bg2.x = 1251;
  }

  if(m.isTouching(bag)){
     score=score+1;
    bag.destroyEach();
     
     }
  
  
  if(m.isTouching(sg)){
     gameState=END;
    sg.destroyEach();
     }

  
  }
  
  if(gameState==END){
     m.x=300;
     m.y=250;
    
    bg.velocityX=0;
    bg2.velocityX=0;
    l.velocityX=0;
    l2.velocityX=0;
    bag.destroyEach();
     }
     drawSprites();
     textSize(20);
  stroke("red");
text("score :"+score,100,70);
}










































function stone() {

  if (World.frameCount % 130 == 0) {
    var st = createSprite(750, 270);
    st.addImage(s);
    st.scale = 0.2;
    st.setCollider("circle",0,0,200);
    st.velocityX = -5;
    st.lifetime = 200;
    sg.add(st);
  }
}

function banana() {
  if (World.frameCount%150==0) {
  var ba=createSprite(800,200);
  ba.addImage(b);
  ba.scale=0.05;
  ba.velocityX=-5;
  ba.lifetime=200;
  bag.add(ba);
  }
}