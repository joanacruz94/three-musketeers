class Door{
    constructor (game){
        this.game = game;
        this.posX = 250;
        this.posY = 0;
        this.width = 100;
        this.height = 100;
    }

    runLogic (){

    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.drawImage(monster, this.posX, this.posY, this.width, this.height);

        context.restore();
    }
}