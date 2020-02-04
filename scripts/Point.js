class Point{
    constructor(game, row, col){
        this.game = game;
        this.row = row;
        this.col = col;
        this.width = 50;
        this.height = 50;
    }

    runLogic (){
        this.col -= 0.02;
    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.drawImage(point, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);
    
        context.restore();
    }
}