class SnowFlake{
    constructor(game, row, col, width, height, image){
        this.game = game;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    runLogic (){
        this.row += 0.02;
    }

    paint (){
        const context = this.game.context;

        context.save();
         
        //context.fillStyle = 'green';
        context.drawImage(this.image, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);

        context.restore();
    }
}