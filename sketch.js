//Create variables here
var dog, happydog, database, foodS, foodStock;
var dogImg, happydogImg;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happydogImg = loadImage("dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
   dog = createSprite(250, 300, 150, 150);
   dog.addImage(dogImg);
   dog.scale = 0.15;   
   
   foodStock = database.ref('Food');
   foodStock.on("value", readStock);

  
}


function draw() {  
background( 49, 139, 87);
 if(keyWentDown(UP_ARROW))
 {
   writeStock(foodS)
   dog.addImage(happydogImg)
 }
  drawSprites();
  //add styles here
  fill(255, 255, 254);
  stroke("black");
  textSize(15);
  fill ("Black");
  text("Food Remaining:"+foodS, 170, 200);
  stroke(1);
  text("Note: Press UP_ARROW Key To Feed Your Puppy Milk", 50, 50);
}

function readStock(data)
{
  foodS=data.val();

}
 function writeStock(x)
 {
 if(x<=0)
 {
   x=0; 
 }
 else
 {
   x=x-1;
 }
  database.ref('/').update({
     Food:x
   })
   
 }

