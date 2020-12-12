var gameState=1;
var player,ground;
function preload()
{
 ig = loadImage("most-affected_1654083868-e1599224977125.jpg");
 y = loadSound("x.mp3");
}
function setup()
{
  createCanvas(1600,880);
  player = createSprite(100,1000,100,100);
  player.shapeColor = "green";
  player.visible = false;
  
  
  ground = createSprite(800,8400,1600,80);
  ground.shapeColor="brown";
  ground.visible= false;



}
function draw()
{
  background(0);
  drawSprites();

  fill("white");
  text(mouseX+";"+mouseY,mouseX,mouseY);

  if(gameState==1) 
  {
    imageMode(CENTER);
    image(ig,800,450,1600,900);
    fill("Black");
    textSize(100);
    text("CORONA-KAL ",460,400);
    text(" PRESS 'C' TO START  ", 300,550);
    playSound("x.mp3");
  }

  if(keyCode === 67)
  {
    gameState =2;
  }

  if (gameState ==2)
  {
    fill("red");
    text("The Game has started  ",displayWidth/2 - 70, displayHeight/4+25);
    player.visible = true;
    ground.visible = true;  
  }
  if(gameState ==3)
  {
    
  }
}

  