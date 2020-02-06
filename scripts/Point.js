class Point{
    constructor(game, row, col, image){
        this.game = game;
        this.row = row;
        this.col = col;
        this.width = 40;
        this.height = 40;
        this.image = image;
    }

    runLogic (){
        this.col -= 0.02;
    }

    moveDown (){
        this.row += 0.02;
    }

    paint (){
        const context = this.game.context;

        context.save();
        
        context.drawImage(this.image, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);
    
        context.restore();
    }
}