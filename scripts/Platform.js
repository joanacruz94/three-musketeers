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

    /*movePlatform(){
        window.setTimeout(() => {
            this.row += this.dir;
            if(this.row < 3 || this.row > 10){
                this.dir *= -1;
            }
            
            this.angle += this.dir;
            if(this.angle > 45){
                //this.dir *= -1;
                this.dir *= -1;
                this.exp *= -1;
            } if(this.angle < -45){
                this.dir *= -1;
               this.exp *= -1;
            }

        }, 200);
    }

    paintTransform (){
        const context = this.game.context;

        context.save();
        context.translate(this.col * GRID_SIZE, this.row * GRID_SIZE);
        context.rotate(this.angle * Math.PI /180);
        context.translate(-this.width/2, -this.height/2);
        console.log(this.col * GRID_SIZE * this.angle * Math.PI /180 - this.width/2);
        context.drawImage(this.image, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);
        context.restore();
    }*/

    paint (){
        const context = this.game.context;

        context.save();
         
        context.drawImage(this.image, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);

        context.restore();
    }
    
}