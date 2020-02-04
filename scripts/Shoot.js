class Shoot{
    constructor (game, posX, posY, direction){
        this.game = game;
        this.posX = posX;
        this.posY = posY;
        this.width = 25;
        this.height = 25;
        this.direction = direction;
    }

    runLogic (){
        if(this.direction === 'right')
            this.posX += 2;
        else this.posX -= 2;
    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.fillStyle = 'red';
        context.fillRect(this.posX, this.posY, this.width, this.height);

        context.restore();
    }
}