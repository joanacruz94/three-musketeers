class Platform{
    constructor(game, row, col, width, height, image){
        this.game = game;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    runLogic (){
        this.col -= 0.02;
    }


    checkIntersection (posX, posY, width, height) {
        return posY + height > this.row * GRID_SIZE &&
        posY < this.row * GRID_SIZE  + this.height &&
        posX + width > this.col * GRID_SIZE  &&
        posX < this.col * GRID_SIZE  + this.width;
    }

    paint (){
        const context = this.game.context;

        context.save();
         
        //context.fillStyle = 'green';
        context.drawImage(this.image, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);

        context.restore();
    }
}