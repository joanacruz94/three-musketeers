class Point{
    constructor(game){
        this.game = game;
        this.row = 0;
        this.col = 0;
        this.width = 100;
        this.height = 100;
    }

    runLogic (){

    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.drawImage(monster, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);
    
        context.restore();
    }
}