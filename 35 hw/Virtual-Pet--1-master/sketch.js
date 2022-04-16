//Create variables here

var dog,happydog,database

var foods,foodobj

var dogg

var lastfed,fedtime

function preload()
{
  //load images here
  dog=loadImage("images/dogimg.png")
  happydog=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);


  dogg=createSprite(350,300)
  dogg.addImage(dog)
  dogg.scale=0.15


  feed=createButton("feed the dog")
  feed.position(550,95)
  feed.mousePressed(feedDog)
 
  addfood=createButton("add food")
  addfood.position(650,95)
  addfood.mousePressed(addFoods)

}


function draw() {  
background("green")

  fill(255,255,254)
  textSize(15)
  if(lastfed>=12){
    text("last feed : "+lastfed%12+"AM",200,95)
  }else if(lastfed==0){
    text("last Feed : 12 AM",200,95)
  }else{
    text("last feed :"+"  "+lastfed+"  "+"PM",200,95)
  }


drawSprites()

}

function feedDog(){
dogg.addImage(happydog)

foodobj.updateFoodStock(foodobj.getFoodStock()-1)
database.ref('/').update({
  Food:foodobj.getFoodStock(),
  //fedtime:hour()
})
}

function addFoods(){

foods++;
database.ref('/').update({
  Food:foods
})


}