class Door{
    constructor (game){
        this.game = game;
        this.posX = 0;
        this.posY = 0;
        this.width = 50;
        this.height = 50;
    }

    setPosX(posX){
        this.posX = posX;
    }

    setPosY(posY){
        this.posY = posY;
    }

    runLogic (){
        this.posX--;
    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.drawImage(final, this.posX, this.posY, this.width, this.height);

        context.restore();
    }
}