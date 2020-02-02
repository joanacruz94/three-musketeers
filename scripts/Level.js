class Level{
    constructor(game){
        this.game = game;
        this.obstacle = new Obstacle(game);
        this.platform = new Platform(game, 9, 3, 100, 50);
        this.platform1 = new Platform(game, 7, 6, 100, 50);
        this.platform2 = new Platform(game, 5, 9, 100, 50);
        this.platform3 = new Platform(game, 3, 12, 100, 50);
        this.platform4 = new Platform(game, 2, 4, 300, 50);
        this.point1 = new Point(game, 8, 3.5);
        this.point2 = new Point(game, 6, 6.5);
        this.point3 = new Point(game, 4, 9.5);
        this.point4 = new Point(game, 2, 12.5);
        this.platforms = [];
        this.points = [];
        this.platforms.push(this.platform);
        this.platforms.push(this.platform1);
        this.platforms.push(this.platform2);
        this.platforms.push(this.platform3);
        this.platforms.push(this.platform4);
        this.points.push(this.point1);
        this.points.push(this.point2);
        this.points.push(this.point3);
        this.points.push(this.point4);
    }

    clearScreen () {
        this.game.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
    }

    runLogic (){
        this.game.character.runLogic();
        //this.platform.runLogic();
        this.obstacle.runLogic();
        //this.point.runLogic();

        for (let i = 0; i < this.platforms.length; i++) {
            // look for collisions with this.game.character
            if (!(keys.down in keysDown) && this.game.character.velocityUp <= 0) {
                // compare x/y values
                if (this.game.character.posY + this.game.character.height > this.platforms[i].row * GRID_SIZE && 
                    this.game.character.posY + this.game.character.height < this.platforms[i].row * GRID_SIZE + this.platforms[i].height && 
                    this.game.character.posY + this.game.character.height - this.game.character.velocityDown - collisionPadding < this.platforms[i].row * GRID_SIZE && 
                    this.game.character.posX + this.game.character.width > this.platforms[i].col * GRID_SIZE + collisionPadding && 
                    this.game.character.posX < this.platforms[i].col * GRID_SIZE + this.platforms[i].width - collisionPadding) {
                    // stop this.game.character
                    this.game.character.posY = this.platforms[i].row * GRID_SIZE - this.game.character.height;
                    
                    // reset jumping/falling
                    this.game.character.jumping = false;
                    this.game.character.velocityDown = 0;
                }
            }
        }

        for(let j = 0; j < this.points.length; j++){
            console.log(this.game.character.posY);
            console.log(this.points[j].row * GRID_SIZE);
            if(Math.floor(this.game.character.posY) === this.points[j].row * GRID_SIZE){
                this.points.splice(j, 1);
            }
        }
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backTwo, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        //context.fillStyle = 'black';
        //context.fillRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        this.game.character.paint();
        for(let i = 0; i < this.platforms.length; i++)
            this.platforms[i].paint();
        this.obstacle.paint();
        for(let j = 0; j < this.points.length; j++)
            this.points[j].paint();
    }
    loop (timestamp) {
        //console.log('TIMESTAMP', timestamp);
        this.runLogic();
        this.paint();
        
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

}