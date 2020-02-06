class Obstacle{
    constructor (game, posX, posY, width, height, image, direction){
        this.game = game;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.xSpeed = 1;
        this.ySpeed = -1;
        this.direction = direction;
        this.image = image;
        this.distance = 100;
        this.prevY = this.posY;
    }

    runLogic (){
        this.posX += this.xSpeed;

        if (this.posX < 180) {
            this.xSpeed *= -1;
            this.direction = 'right';
        }
        else if(this.posX > 430){
            this.xSpeed *= -1;
            this.direction = 'left';
        }
    }

    runLogicLevelFive (){
        this.posX += this.xSpeed;

        if (this.posX < 100) {
            this.xSpeed *= -1;
            this.direction = 'right';
        }
        else if(this.posX > 800){
            this.xSpeed *= -1;
            this.direction = 'left';
        }
    }

    move (){
        this.posY += this.ySpeed;

        if (this.posY < 20) {
            this.ySpeed *= -1;
        }
        else if(this.posY + this.height === this.prevY + this.height){
            this.ySpeed *= -1;
        }
    }

    moveLeft (){
        this.posX -= 1;
    }

    paint (){
        const context = this.game.context;

        context.save();
        
        if(this.xSpeed < 0) {
            context.scale(-1, 1);
            context.drawImage(this.image, -this.posX - this.width, this.posY, this.width, this.height);
        }
        else{
            context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        }

        context.restore();
    }

}