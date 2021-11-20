var bg
var blueGhost, redGhost, yellowGhost, greenGhost
var pacMan, pacLeft, pacRight, pacUp, pacDown

function pewload(){
  bg = loadImage('Background,png');
  blueGhost = loadImage('BlueGhost.png');
  redGhost = loadImage('RedGhost.png');
  yellowGhost = loadImage('YellowGhost.png');
  greenGhost = loadImage('GreenGhost.png');   
  pacLeft = loadImage('Pacmanleft.png');
  pacRight = loadImage('Pacmanright.png');
  pacUp = loadImage('Pacmanup.png');
  pacDown = loadImage('pacmandown.png');
}


function setup(){
  createCanvas(800,600);
  blueGhost = createSprite(400,360,40,40);
  redGhost = createSprite(450,360,40,40);
  yellowGhost = createSprite(500,360,40,40);
  greenGhost = createSprite(350,360,40,40);
  pacMan = createSprite(40,40,40,40);

  
}

function draw(){
  background(0,0,255);
  drawSprites();

  
  if (keyCode == UP_ARROW){
    console.log(1)
    pacMan.y = pacMan.y-20;
  }
  if (keyCode == DOWN_ARROW){
    pacMan.y = pacMan.y + 20;
  }
  if (keyCode == LEFT_ARROW){
    pacMan.x = pacMan.x - 20;
  }


  

  textSize(18);
  fill('white');
  text (mouseX + ' . ' + mouseY, mouseX,  mouseY);
}

