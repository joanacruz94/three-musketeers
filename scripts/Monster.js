class Monster extends Obstacle{
    constructor (game, posX, posY, width, height, image, direction){
        super(game, posX, posY, width, height, image, direction);
        this.lifes =  5;
    }

    runLogic (){
        this.posX += this.xSpeed;

        if (this.posX < 0) {
            this.xSpeed *= -1;
            this.direction = 'right';
        }
        else if(this.posX > this.game.$canvas.width - this.width){
            this.xSpeed *= -1;
            this.direction = 'left';
        }

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