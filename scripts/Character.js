class Character {
  constructor (game) {
    this.game = game;
    this.width = 60;
    this.height = 60;
    this.posX = 120;
    this.posY = this.game.$canvas.height - this.height;
    this.velocityX = 0;
    this.velocityY = 0;
    this.gravity = 10;
    this.friction = 15;
    this.platforms = this.game.levelOne.platforms;
    this.image = characterPaused;
    this.jumping = false;
    this.direction = 0;
    this.lastPressed = 'right';
  }

  jump () {
    if (!this.jumping) {
      this.velocityY = -8;
      this.jumping = true;
    }
  }

  runLogic() {
    if (keys.right in keysDown){
      this.direction = 1;
      this.image = characterRunning;
      this.lastPressed = 'right';
    } else if (keys.left in keysDown){
      this.direction = -1;
      this.image = characterRunning;
      this.lastPressed = 'left';
    }
    else {
      this.image = characterPaused; 
      this.direction = 0;
    }

    let velX = this.velocityX / (1 + this.friction / 1000 * 16) + this.direction * 0.5;
    let velY = this.velocityY + (this.gravity / 1000 * 16);
    
    let pX = this.posX + velX;
    let pY = this.posY + velY;

    for (let obstacle of this.platforms) {
      const horizontalIntersection = obstacle.checkIntersection(
        pX, this.posY, this.width, this.height);
      const verticalIntersection = obstacle.checkIntersection(
        this.posX, pY, this.width, this.height);

      if (verticalIntersection) {
        velY = 0;
        pY = this.posY;
        this.jumping = false;
      }
      if (horizontalIntersection) {
        velX = 0;
        pX = this.posX;
      }
    }

    this.velocityX = velX;
    this.velocityY = velY;
    this.posX = pX;
    this.posY = pY;

    if (this.posY + this.height >= this.game.$canvas.height) {
      this.jumping = false;
      this.posY = this.game.$canvas.height - this.height;
      this.velocityY = 0;
    }

    if(this.posY <= 0) this.posY = 0;

    if(this.posX + this.width >= this.game.$canvas.width) this.posX = this.game.$canvas.width - this.width;

    if(this.posX<= 0) this.posX = 0;

  }

  paint() {
    const context = this.game.context;

    context.save();

    if (this.direction === 1) {
      context.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    } else if (this.direction === -1) {
      context.scale(-1, 1);
      context.drawImage(
        this.image,
        -this.posX,
        this.posY,
        this.width,
        this.height
      );
    }
    else if(this.direction === 0 && this.lastPressed === 'right'){
      context.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    } else {
      context.scale(-1, 1);
      context.drawImage(
        this.image,
        -this.posX,
        this.posY,
        this.width,
        this.height
      );
    }
    context.restore();
  }
}
