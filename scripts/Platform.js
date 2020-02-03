class Platform{
    constructor(game, row, col, width, height){
        this.game = game;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height;
    }

    runLogic (){
        this.col -= 0.05;
    }

    paint (){
        const context = this.game.context;

        context.save();
         
        //context.fillStyle = 'green';
        context.drawImage(pattern, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);

        context.restore();
    }
}