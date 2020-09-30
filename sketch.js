var fixedrect, movingrect
var bouncyrect1, bouncyrect2

function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(600, 200, 70, 50);
  bouncyrect1 = createSprite(400, 100, 50, 50);
  bouncyrect2 = createSprite(600, 100, 70, 50);
  bouncyrect1.velocityX = 1;
  bouncyrect2.velocityX = -1;
}

function draw() {
  background(255,255,255);
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(bouncyrect1.x-bouncyrect2.x < bouncyrect1.width/2 + bouncyrect2.width/2 && 
    bouncyrect2.x-bouncyrect1.x < bouncyrect2.width/2 + bouncyrect1.width/2)
    {
    bouncyrect1.velocityX = bouncyrect1.velocityX * (-1);
    bouncyrect2.velocityX = bouncyrect2.velocityX * (-1);
    }

    if(bouncyrect1.y-bouncyrect2.y < bouncyrect1.height/2 + bouncyrect2.height/2 && 
      bouncyrect2.y-bouncyrect1.y < bouncyrect2.height/2 + bouncyrect1.height/2)
      {
      bouncyrect1.velocityY = bouncyrect1.velocityY * (-1);
      bouncyrect2.velocityY = bouncyrect2.velocityY * (-1);
      }
  
    if(movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
    movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2)
    {
  fixedrect.shapeColor = "purple";
  movingrect.shapeColor = "purple";
  }
  else{
    fixedrect.shapeColor = "blue"
    movingrect.shapeColor = "blue"
  }
  drawSprites();
}