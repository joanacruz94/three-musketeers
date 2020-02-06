class Door{
    constructor (game, image){
        this.game = game;
        this.posX = 0;
        this.posY = 0;
        this.width = 50;
        this.height = 50;
        this.image = image;
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

    moveDown (){
        this.posY += 2;
    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.drawImage(this.image, this.posX, this.posY, this.width, this.height);

        context.restore();
    }
}