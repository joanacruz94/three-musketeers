class Monster extends Obstacle{
    constructor (game, posX, posY, width, height, image, direction){
        super(game, posX, posY, width, height, image, direction);
        this.lifes =  5;
        this.helpers = [];
    }

    sendHelpers(){
        setInterval(() => {
            this.o1 = new Obstacle()
            this.o2 = new Obstacle()
            this.o3 = new Obstacle()
            this.o4 = new Obstacle()
            this.o5 = new Obstacle(this.game, this.posX, this.posY, 30, 30, )
        }, 10000);
    }

    runLogic (){
        this.posX += this.xSpeed;

        if (this.posX < 0) {
            this.xSpeed *= -1;
            this.direction = 'right';
            console.log('ola');

        }
        else if(this.posX > this.game.$canvas.width - this.width){
            this.xSpeed *= -1;
            this.direction = 'left';
            console.log('ola1');

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

        if(this.posX < 500 && this.posX > 200){
            context.fillStyle = 'grey';
            context.fillRect(100, 100, 50, 50);
        }  

        context.restore();
    }

    
}