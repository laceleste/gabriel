var bg, bgImg;
var player, shooterImg, shooter_shooting;
var gamestate = 1;
var play;
function preload() {
  playImg = loadImage("assets/start.png");
  cenario1 = loadImage("assets/cenario1.png");
  cenario2 = loadImage("assets/cenario2.png");
  bonnie = loadImage("assets/bonnie.gif");
  burntrap = loadImage("assets/burntrap.png");
  foxy = loadImage("assets/foxy.png");
  glich = loadImage("assets/glich.png");
  freddy = loadImage("assets/freddy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  // player.addImage(shooterImg);
  // player.scale = 0.3;
  player.debug = true;
  player.setCollider("rectangle", 0, 0, 300, 300);

  animatronicGroup = new Group();
}

function draw() {
  image(cenario1, 0, 0, windowWidth, windowHeight);

 
  animatronicspawn()
 
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30;
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30;
  }
  if (keyDown("RIGHT_ARROW") || touches.length > 0) {
    player.x = player.x + 30;
  }
  if (keyDown("LEFT_ARROW") || touches.length > 0) {
    player.x = player.x - 30;
  }
  drawSprites();
}

function animatronicspawn() {
  if (frameCount % 60 === 0) {
    animatronic = createSprite(width / 2 + 250, random(height / 2), 40, 40);
    animatronic.velocityX = Math.round(random(-7, 5));
    animatronic.velocityY = Math.round(random(-5, 7));
    animatronic.scale = 0.5;
    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1:
        animatronic.addImage(freddy);
        break;
      case 2:
        animatronic.addImage(bonnie);
        break;
      case 3:
        animatronic.addImage(foxy);
        break;
      case 4:
        animatronic.addImage(burntrap);
        break;
      case 5:
        animatronic.addImage(glich);
        break;
      default:
        break;
    }
    animatronic.lifetime = 600;
    animatronicGroup.add(animatronic);
  }
}
