class Platform{
    constructor(game, row, col, width, height, image){
        this.game = game;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height;
        this.image = image;
        this.xSpeed = 0.3;
        this.angle = 0;
        this.dir = 0.01;
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