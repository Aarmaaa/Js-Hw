//Create variables here
var dog,dogimg,happyDogimg

var database

var foodS,foodStock

function preload()
{
	//load images here
  dogimg=loadImage("images/dog.png")
  happyDogimg=loadImage("images/dog1.png")

}

function setup() {
	createCanvas(650, 500);
  database=firebase.database();

  dog=createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}

function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogimg)
  }


  drawSprites();
  //add styles here

  textSize(25)
  fill("balck")
  stroke(20)
  text("note : Press UP_ARROW To Feed The Drago Milk . ",10,50);
}

function readStock(data){
  foodS=data.val();
  console.log(foodS)
}

function writeStock(x){
 
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
 console.log(x)
  database.ref('/').update({
      Food:x
  })
}