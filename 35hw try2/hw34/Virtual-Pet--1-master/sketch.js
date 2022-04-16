var dog, happyDog, database, foodStock;
var dogImage1, dogImage2, name;
var fedTime, lastFed, foodObj;
var feedPetButton, addFoodButton;

function preload() {
  dogImage1 = loadImage("images/dog.png");
  dogImage2 = loadImage("images/dog1.png");
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
  background(46,139,87);

  foodObj.display();

  fedTime = database.ref("feedTime");
  fedTime.on("value",function(data){
    lastFed = data.val();
  });

  // foodObj.getFoodStock();

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
    feedTime: hour()
  })
}
