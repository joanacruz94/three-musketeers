class LevelTwo extends Level{
    constructor(game){
        super(game);
        this.posXBack = 0;
        this.speed = 3;
        this.platforms = [];
        this.points = [];
        for (let i = 0; i < 500; i++) {
            this.platforms.push(this.setRandomPosition(5 * i));
        }
    }

    setRandomPosition (randCol) {
        const row = Math.floor(Math.random() * (10 - 3 + 1) + 3);
        const col = randCol;
        const height = 50;
        const width = 150;
        const point = new Point(this.game, row - 1, col + 1);
        this.points.push(point);
        console.log(point);
        return new Platform(this.game, row, col, width, height);
    }

    clearScreen () {
        this.game.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
    }

    runLogic (){
        this.game.character.runLogic();
        this.posXBack -= this.speed;
        if (backFour.width) {
            this.posXBack = this.posXBack % backFour.width;
        }
        
        for(let i = 0; i < this.platforms.length; i++){
            this.platforms[i].runLogic();

            if (!(keys.down in keysDown) && this.game.character.velocityUp <= 0) {
                if (this.game.character.posY + this.game.character.height > this.platforms[i].row * GRID_SIZE && 
                    this.game.character.posY + this.game.character.height < this.platforms[i].row * GRID_SIZE + this.platforms[i].height && 
                    this.game.character.posY + this.game.character.height - this.game.character.velocityDown - collisionPadding < this.platforms[i].row * GRID_SIZE && 
                    this.game.character.posX + this.game.character.width > this.platforms[i].col * GRID_SIZE + collisionPadding && 
                    this.game.character.posX < this.platforms[i].col * GRID_SIZE + this.platforms[i].width - collisionPadding) {
                    this.game.character.posY = this.platforms[i].row * GRID_SIZE - this.game.character.height;
                    this.game.character.jumping = false;
                    this.game.character.velocityDown = 0;
                }
            }
        }

        for(let j = 0; j < this.points.length; j++){
            this.points[j].runLogic();
            let positionY = Math.floor(this.game.character.posY);
            if(positionY + this.game.character.height < this.points[j].row * GRID_SIZE + this.points[j].height &&
                this.game.character.posX + this.game.character.width > this.points[j].col * GRID_SIZE + this.points[j].width){
                this.points.splice(j, 1);
            }
        }
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backFour, this.posXBack, 0);
        context.drawImage(backFour, backFour.width + this.posXBack, 0);
        context.restore();
        for(let j = 0; j < this.points.length; j++)
            this.points[j].paint();
        for(let i = 0; i < this.platforms.length; i++)
            this.platforms[i].paint();
        this.game.character.paint();
    }

    loop (timestamp) {
        //console.log('TIMESTAMP', timestamp);
        this.runLogic();
        this.paint();
        
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
}