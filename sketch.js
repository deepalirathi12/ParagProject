var bg;
var earth,earthImg;
var helicopter,heliImg,heliAnim;
var form,game,player;
var gameState = 0;
var playerCount;

function preload(){
  bg = loadImage("img/bg.png");
  earthImg = loadImage("img/earth.jpg");
  heliImg = loadImage("img/h1.png")
  heliAnim = loadAnimation("img/h1.png","img/h2.png","img/h3.png","img/h4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(bg);  

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState===1){
    game.play()
  }

 
  
  drawSprites();
}