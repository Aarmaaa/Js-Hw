var dog, happyDog, database, foodStock;
var dogImage1, dogImage2, name,bedroom, garden, washroom;
var fedTime, lastFed, foodObj;
var feedPetButton, addFoodButton;
var gameState
var currentTime

function preload() {
  dogImage1 = loadImage("images/Dog.png");
  dogImage2 = loadImage("images/dog1.png");
  bedroom = loadImage("images/Bed Room.png")
  garden = loadImage("images/Garden.png")
  washroom = loadImage("images/Wash Room.png")

}

function setup() {
  createCanvas(800, 800);
  
  database = firebase.database();
  foodObj = new Food();
  
  foodsRef = database.ref("Food");
  foodsRef.on("value",function(data){
    foodStock = data.val();
    foodObj.updateFoodStock(foodStock)
  });

  
  database.ref("gameState").on("value", function(data){
    gameState = data.val();
  })
  
  dog = createSprite(400,500,10,10);
  dog.addImage(dogImage1);
  dog.scale = 0.3;

  

  addFoodButton = createButton("ADD FOOD");
  addFoodButton.position(700,60);
  addFoodButton.mousePressed(addFoods);
  feedPetButton = createButton("FEED DOG");
  feedPetButton.position(800,60);
  feedPetButton.mousePressed(feedDog);

}

function draw() {  
  background(46,139,107);

  foodObj.display();

  fedTime = database.ref("feedTime");
  fedTime.on("value",function(data){
    lastFed = data.val();
  });

  // foodObj.getFoodStock();

  if (gameState != "hungry"){
    feedPetButton.hide()
    addFoodButton.hide()
    dog.visible = false;
  }
  else{
    feedPetButton.show()
    addFoodButton.show()
    dog.addImage(dogImage2)
    dog.visible = true;

  }

  currentTime = hour()
  console.log(currentTime)

  if (currentTime === (lastFed + 1) ){
    foodObj.garden()
    //background(bedroom, 550, 500)

    update("playing")
  }
  else if(currentTime === (lastFed + 2)){
    foodObj.bedroom()
    //background(bedroom, 550, 500)
    
    update("sleeping")
  }
  else if(currentTime > (lastFed+2) && currentTime<= (lastFed + 4)){
    foodObj.washroom()
    //background(bedroom, 550, 500)

    update("bathing")
  }
  else if(currentTime == lastFed){
    foodObj.bedroom()
    update("sleeping")
  }
  else{
    update("hungry")
    //background(bedroom, 550, 500)
    foodObj.display()
  }

  drawSprites();

  textFont("georgia");
  fill(255);
  strokeWeight(3);
  stroke(0);
 
  if(lastFed>=12) {
    text("Last Fed: "+lastFed%12+" PM", 10, 30);
  } else if(lastFed===0) {
    text("Last Fed: 12 AM", 10, 30);
  } else {
    text("Last Fed: "+lastFed + " AM", 10, 30);
  }
}

function addFoods() {
  // dog.addImage(dogImage1);
  foodStock++;
  console.log(foodStock);
  database.ref("/").update({
    Food: foodStock
  });
}

function feedDog() {
  dog.addImage(dogImage2);
  // foodObj.deductFood(foodStock);
 
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(0);
  }
  else {
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  database.ref("/").update({
    Food: foodObj.getFoodStock(),
    feedTime: hour(),
    gameState: "hungry"
  })
}

function update(state){
  database.ref("/").update({
    gameState: state
  })
}